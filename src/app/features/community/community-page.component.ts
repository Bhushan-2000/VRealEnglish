import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../../core/services/wallet.service';
import { ToastService } from '../../core/services/toast.service';

interface Partner {
  id: string;
  name: string;
  avatar: string;
  level: string;
  country: string;
  gender: string;
}

interface CallHistoryItem {
  id: string;
  partnerName: string;
  partnerAvatar: string;
  duration: number;
  date: string;
  creditsEarned: number;
}

interface Room {
  id: string;
  topic: string;
  level: string;
  maxParticipants: number;
  participants: Array<{ name: string; avatar: string }>;
  duration: number;
  hostName: string;
}

interface NewRoom {
  topic: string;
  level: string;
  maxParticipants: number;
}

@Component({
  selector: 'app-community-page',
  standalone: false,
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit, OnDestroy {
  // Tab Management
  activeTab: '1on1' | 'group' = '1on1';

  // Live Members
  liveMembers = 12247;
  private baseMemberCounts = {
    'any-basic': 3600,
    'any-intermediate': 5850,
    'any-advanced': 2800,
    'male-basic': 1600,
    'male-intermediate': 2650,
    'male-advanced': 1250,
    'female-basic': 2000,
    'female-intermediate': 3200,
    'female-advanced': 1550
  };

  // Filters
  genderFilter: 'any' | 'male' | 'female' = 'any';
  levelFilter: 'basic' | 'intermediate' | 'advanced' = 'intermediate';

  // Call State
  isInCall = false;
  callState: 'connecting' | 'connected' = 'connecting';
  callDuration = signal(0);
  englishMinutes = signal(0);
  creditsEarned = signal(0);
  isMuted = false;
  myVoiceActive = signal(false);
  partnerVoiceActive = signal(false);
  
  // Group Discussion Modal State
  isRoomModalOpen = signal(false);
  selectedRoom = signal<any>(null);
  roomParticipants = signal<any[]>([]);
  chatMessages = signal<any[]>([]);
  newMessage = signal('');
  isUserMuted = signal(false);
  isChatDisabled = signal(false);
  showEmojiPicker = signal(false);
  emojis = ['😊', '👍', '❤️', '😂', '🎉', '🔥', '👏', '💯', '🤔', '😍', '🙌', '✨'];

  // Timers
  private callTimer: any;
  private voiceSimulationTimer: any;
  private connectingTimer: any;

  // Current User
  currentUser = {
    name: 'You',
    avatar: 'https://i.pravatar.cc/150?img=33',
    level: 'Intermediate'
  };

  // Partner
  partner: Partner = {
    id: '',
    name: '',
    avatar: '',
    level: '',
    country: '',
    gender: ''
  };

  // Wallet earning configuration
  private readonly CREDITS_PER_MINUTE = 0.19; // Based on wallet earning rules: 699 credits for 60 hours (3600 min)
  private readonly ENGLISH_DETECTION_RATE = 0.85; // 85% of speech is valid English

  goBack(): void {
    this.router.navigate(['/']);
  }

  // Mock Partners Pool
  private partnersPool: Partner[] = [
    { id: '1', name: 'Rucha Sharma', avatar: 'https://i.pravatar.cc/150?img=47', level: 'Intermediate', country: '🇮🇳 India', gender: 'female' },
    { id: '2', name: 'Arjun Patel', avatar: 'https://i.pravatar.cc/150?img=12', level: 'Advanced', country: '🇮🇳 India', gender: 'male' },
    { id: '3', name: 'Anjali Reddy', avatar: 'https://i.pravatar.cc/150?img=45', level: 'Basic', country: '🇮🇳 India', gender: 'female' },
    { id: '4', name: 'Rohan Kumar', avatar: 'https://i.pravatar.cc/150?img=13', level: 'Intermediate', country: '🇮🇳 India', gender: 'male' },
    { id: '5', name: 'Kavya Singh', avatar: 'https://i.pravatar.cc/150?img=44', level: 'Advanced', country: '🇮🇳 India', gender: 'female' },
    { id: '6', name: 'Aditya Gupta', avatar: 'https://i.pravatar.cc/150?img=14', level: 'Basic', country: '🇮🇳 India', gender: 'male' },
    { id: '7', name: 'Sneha Verma', avatar: 'https://i.pravatar.cc/150?img=48', level: 'Intermediate', country: '🇮🇳 India', gender: 'female' },
    { id: '8', name: 'Vikram Mehta', avatar: 'https://i.pravatar.cc/150?img=11', level: 'Advanced', country: '🇮🇳 India', gender: 'male' }
  ];

  // Call History
  callHistory: CallHistoryItem[] = [
    { id: '1', partnerName: 'Neha Kapoor', partnerAvatar: 'https://i.pravatar.cc/150?img=49', duration: 15, date: 'Today, 2:30 PM', creditsEarned: 45 },
    { id: '2', partnerName: 'Rahul Desai', partnerAvatar: 'https://i.pravatar.cc/150?img=33', duration: 22, date: 'Yesterday, 5:15 PM', creditsEarned: 66 },
    { id: '3', partnerName: 'Riya Malhotra', partnerAvatar: 'https://i.pravatar.cc/150?img=43', duration: 18, date: 'Dec 13, 4:45 PM', creditsEarned: 54 }
  ];

  // Group Discussion Rooms
  activeRooms: Room[] = [
    {
      id: '1',
      topic: 'Travel Experiences & Adventures',
      level: 'intermediate',
      maxParticipants: 6,
      participants: [
        { name: 'Pooja', avatar: 'https://i.pravatar.cc/150?img=41' },
        { name: 'Karan', avatar: 'https://i.pravatar.cc/150?img=52' },
        { name: 'Divya', avatar: 'https://i.pravatar.cc/150?img=42' }
      ],
      duration: 12,
      hostName: 'Pooja S.'
    },
    {
      id: '2',
      topic: 'Business English & Networking',
      level: 'advanced',
      maxParticipants: 5,
      participants: [
        { name: 'Amit', avatar: 'https://i.pravatar.cc/150?img=60' },
        { name: 'Simran', avatar: 'https://i.pravatar.cc/150?img=46' }
      ],
      duration: 8,
      hostName: 'Amit K.'
    },
    {
      id: '3',
      topic: 'Daily Life & Casual Chat',
      level: 'basic',
      maxParticipants: 8,
      participants: [
        { name: 'Harish', avatar: 'https://i.pravatar.cc/150?img=59' },
        { name: 'Meera', avatar: 'https://i.pravatar.cc/150?img=38' },
        { name: 'Sanjay', avatar: 'https://i.pravatar.cc/150?img=58' },
        { name: 'Ananya', avatar: 'https://i.pravatar.cc/150?img=40' }
      ],
      duration: 22,
      hostName: 'Harish M.'
    },
    {
      id: '4',
      topic: 'Politics & Current Affairs',
      level: 'intermediate',
      maxParticipants: 5,
      participants: [
        { name: 'You', avatar: 'https://i.pravatar.cc/150?img=33' },
        { name: 'Rajesh', avatar: 'https://i.pravatar.cc/150?img=57' },
        { name: 'Rucha', avatar: 'https://i.pravatar.cc/150?img=44' }
      ],
      duration: 2,
      hostName: 'You'
    }
  ];

  // Create Room Modal
  showCreateRoomModal = false;
  newRoom: NewRoom = {
    topic: '',
    level: 'intermediate',
    maxParticipants: 5
  };

  constructor(
    private walletService: WalletService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    // Check for query params to determine active tab
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const tab = urlParams.get('tab');
      if (tab === 'group') {
        this.activeTab = 'group';
      }
    }

    // Initialize member count based on default filters
    this.updateLiveMemberCount();

    // Simulate live members count fluctuation with small variations
    setInterval(() => {
      this.updateLiveMemberCount();
    }, 8000);

    // Simulate room duration updates
    setInterval(() => {
      this.activeRooms.forEach(room => {
        room.duration++;
      });
    }, 60000);
  }

  updateLiveMemberCount(): void {
    const filterKey = `${this.genderFilter}-${this.levelFilter}` as keyof typeof this.baseMemberCounts;
    const baseCount = this.baseMemberCounts[filterKey];
    // Add small random fluctuation (+/- 5%)
    const fluctuation = Math.floor(baseCount * 0.05 * (Math.random() * 2 - 1));
    this.liveMembers = baseCount + fluctuation;
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  // 1:1 Call Functions
  startCall(): void {
    // Clear any existing timers first
    this.clearTimers();
    
    this.isInCall = true;
    this.callState = 'connecting';
    this.callDuration.set(0);
    this.englishMinutes.set(0);
    this.creditsEarned.set(0);
    this.myVoiceActive.set(false);
    this.partnerVoiceActive.set(false);

    // Immediate connection - connect instantly
    this.partner = this.findMatchingPartner();
    this.callState = 'connected';
    this.startCallTimer();
    this.startVoiceSimulation();
  }

  findMatchingPartner(): Partner {
    let filteredPartners = this.partnersPool.filter(p => {
      const genderMatch = this.genderFilter === 'any' || p.gender === this.genderFilter;
      const levelMatch = p.level.toLowerCase() === this.levelFilter;
      return genderMatch && levelMatch;
    });

    // If no match found, use any partner
    if (filteredPartners.length === 0) {
      filteredPartners = this.partnersPool;
    }

    return filteredPartners[Math.floor(Math.random() * filteredPartners.length)];
  }

  startCallTimer(): void {
    this.callTimer = setInterval(() => {
      const newDuration = this.callDuration() + 1;
      this.callDuration.set(newDuration);
      
      const actualMinutesPassed = Math.floor(newDuration / 60);
      
      // Only start calculating English minutes after at least 1 full minute has passed
      if (actualMinutesPassed >= 1) {
        // Update English minutes at specific intervals to show progress (every 10-15 seconds)
        if (newDuration % 10 === 0 || newDuration % 15 === 0) {
          const currentEnglishMinutes = this.englishMinutes();
          // Target is 85% of actual minutes passed
          const targetEnglishMinutes = Math.floor(actualMinutesPassed * this.ENGLISH_DETECTION_RATE);
          
          // Gradually increment to show AI is detecting speech in real-time
          if (currentEnglishMinutes < targetEnglishMinutes) {
            const newEnglishMinutes = currentEnglishMinutes + 1;
            this.englishMinutes.set(newEnglishMinutes);
            // Calculate credits: 699 credits for 60 hours = 0.19 credits per minute
            this.creditsEarned.set(Math.round(newEnglishMinutes * this.CREDITS_PER_MINUTE * 100) / 100);
          }
        }
        
        // Sync at full minute marks to ensure accuracy
        if (newDuration % 60 === 0) {
          const expectedMinutes = Math.floor(actualMinutesPassed * this.ENGLISH_DETECTION_RATE);
          if (this.englishMinutes() < expectedMinutes) {
            this.englishMinutes.set(expectedMinutes);
            this.creditsEarned.set(Math.round(expectedMinutes * this.CREDITS_PER_MINUTE * 100) / 100);
          }
        }
      }
    }, 1000);
  }

  startVoiceSimulation(): void {
    this.voiceSimulationTimer = setInterval(() => {
      // Simulate alternating voice activity
      if (Math.random() > 0.5) {
        this.myVoiceActive.set(!this.myVoiceActive());
      }
      if (Math.random() > 0.5) {
        this.partnerVoiceActive.set(!this.partnerVoiceActive());
      }
    }, 800);
  }

  endCall(): void {
    const earnedCredits = this.creditsEarned();
    const englishMins = this.englishMinutes();
    const duration = this.callDuration();

    // Add earned credits to wallet
    if (earnedCredits > 0) {
      this.walletService.addFunds(
        earnedCredits,
        `Speaking practice with ${this.partner.name} - ${englishMins} min English`
      ).subscribe();
    }

    // Save to history
    const newHistoryItem: CallHistoryItem = {
      id: Date.now().toString(),
      partnerName: this.partner.name,
      partnerAvatar: this.partner.avatar,
      duration: Math.floor(duration / 60),
      date: 'Just now',
      creditsEarned: earnedCredits
    };
    this.callHistory.unshift(newHistoryItem);

    // Reset state
    this.clearTimers();
    this.isInCall = false;
    this.callState = 'connecting';
    this.myVoiceActive.set(false);
    this.partnerVoiceActive.set(false);

    // Show success message (you can add a toast notification here)
    console.log(`Call ended. Earned ${earnedCredits} credits!`);
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
  }

  reportIssue(): void {
    this.toastService.success('Report submitted. Our team will review this call for quality assurance.');
  }

  formatTime(seconds: number | (() => number)): string {
    const sec = typeof seconds === 'function' ? seconds() : seconds;
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  clearTimers(): void {
    if (this.callTimer) clearInterval(this.callTimer);
    if (this.voiceSimulationTimer) clearInterval(this.voiceSimulationTimer);
    if (this.connectingTimer) clearTimeout(this.connectingTimer);
  }

  // Group Discussion Functions
  openCreateRoomModal(): void {
    this.showCreateRoomModal = true;
    this.newRoom = {
      topic: '',
      level: 'intermediate',
      maxParticipants: 5
    };
  }

  closeCreateRoomModal(): void {
    this.showCreateRoomModal = false;
  }

  createRoom(): void {
    if (!this.newRoom.topic.trim()) {
      this.toastService.warning('Please enter a room topic');
      return;
    }

    const room: Room = {
      id: Date.now().toString(),
      topic: this.newRoom.topic,
      level: this.newRoom.level,
      maxParticipants: this.newRoom.maxParticipants,
      participants: [
        { name: this.currentUser.name, avatar: this.currentUser.avatar }
      ],
      duration: 0,
      hostName: this.currentUser.name
    };

    this.activeRooms.unshift(room);
    this.closeCreateRoomModal();
    
    // Open the room modal immediately
    this.openRoomModal(room);
  }
  
  joinRoom(roomId: string): void {
    const room = this.activeRooms.find(r => r.id === roomId);
    if (room) {
      this.openRoomModal(room);
    }
  }
  
  // Group Discussion Modal Methods
  openRoomModal(room: any): void {
    this.selectedRoom.set(room);
    this.generateRoomParticipants(room);
    this.generateInitialChatMessages(room);
    this.isRoomModalOpen.set(true);
    this.isUserMuted.set(false);
    this.isChatDisabled.set(false);
  }
  
  closeRoomModal(): void {
    this.isRoomModalOpen.set(false);
    this.selectedRoom.set(null);
    this.roomParticipants.set([]);
    this.chatMessages.set([]);
    this.newMessage.set('');
    this.showEmojiPicker.set(false);
  }
  
  generateRoomParticipants(room: any): void {
    const indianNames = {
      male: ['Arjun', 'Rohan', 'Vikram', 'Aditya', 'Karan', 'Amit', 'Harish', 'Sanjay', 'Raj', 'Dev'],
      female: ['Rucha', 'Anjali', 'Kavya', 'Sneha', 'Pooja', 'Divya', 'Simran', 'Meera', 'Riya', 'Neha']
    };
    
    const maleAvatars = [12, 13, 14, 11, 15, 16, 52, 58, 59, 60];
    const femaleAvatars = [47, 45, 44, 48, 49, 50, 38, 40, 41, 42, 43, 46];
    
    const levels = ['basic', 'intermediate', 'advanced'];
    const currentCount = room.participants.length + 1; // +1 for current user
    const participants = [];
    
    // Add current user first
    participants.push({
      id: 'current-user',
      name: 'You',
      gender: 'male',
      level: this.levelFilter,
      avatar: this.currentUser.avatar,
      joinedAgo: 0,
      isCreator: false,
      isMuted: false,
      isCurrentUser: true
    });
    
    // Add existing participants from room
    room.participants.forEach((p: any, index: number) => {
      const gender = Math.random() > 0.5 ? 'male' : 'female';
      const joinedMinutesAgo = Math.floor(Math.random() * room.duration);
      
      participants.push({
        id: `participant-${index}`,
        name: p.name,
        gender,
        level: room.level,
        avatar: p.avatar,
        joinedAgo: joinedMinutesAgo,
        isCreator: index === 0, // First participant is creator
        isMuted: false,
        isCurrentUser: false
      });
    });
    
    this.roomParticipants.set(participants);
  }
  
  generateInitialChatMessages(room: any): void {
    const participants = this.roomParticipants();
    const messages = [];
    
    // Add welcome message from creator
    if (participants.length > 1) {
      const creator = participants.find(p => p.isCreator);
      if (creator) {
        messages.push({
          id: `msg-${Date.now()}-1`,
          sender: creator.name,
          text: `Welcome to ${room.topic}! Let's have a great discussion 😊`,
          timestamp: new Date(Date.now() - 5 * 60000),
          avatar: creator.avatar,
          isCurrentUser: false
        });
      }
      
      // Add conversation messages
      const sampleMessages = [
        'Hi everyone! Excited to be here',
        'This topic is really interesting 👍',
        'Looking forward to practicing my English',
        'Anyone wants to share their thoughts?',
        'Great discussion so far!',
        'I learned a lot today 💯'
      ];
      
      for (let i = 0; i < Math.min(4, participants.length - 1); i++) {
        const randomParticipant = participants[1 + (i % (participants.length - 1))];
        messages.push({
          id: `msg-${Date.now()}-${i + 2}`,
          sender: randomParticipant.name,
          text: sampleMessages[i % sampleMessages.length],
          timestamp: new Date(Date.now() - (4 - i) * 60000),
          avatar: randomParticipant.avatar,
          isCurrentUser: false
        });
      }
    }
    
    this.chatMessages.set(messages);
  }
  
  sendMessage(): void {
    const message = this.newMessage().trim();
    if (!message || this.isChatDisabled() || this.isUserMuted()) return;
    
    const currentUser = this.roomParticipants().find(p => p.isCurrentUser);
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'You',
      text: message,
      timestamp: new Date(),
      avatar: currentUser?.avatar || this.currentUser.avatar,
      isCurrentUser: true
    };
    
    this.chatMessages.update(msgs => [...msgs, newMsg]);
    this.newMessage.set('');
    this.showEmojiPicker.set(false);
    
    // Simulate other participants responding
    setTimeout(() => this.simulateResponse(), 2000 + Math.random() * 3000);
  }
  
  sendEmoji(emoji: string): void {
    if (this.isChatDisabled() || this.isUserMuted()) return;
    
    const currentUser = this.roomParticipants().find(p => p.isCurrentUser);
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'You',
      text: emoji,
      timestamp: new Date(),
      avatar: currentUser?.avatar || this.currentUser.avatar,
      isCurrentUser: true
    };
    
    this.chatMessages.update(msgs => [...msgs, newMsg]);
    this.showEmojiPicker.set(false);
  }
  
  simulateResponse(): void {
    if (!this.isRoomModalOpen()) return;
    
    const participants = this.roomParticipants().filter(p => !p.isCurrentUser && !p.isMuted);
    if (participants.length === 0) return;
    
    const randomParticipant = participants[Math.floor(Math.random() * participants.length)];
    const responses = [
      'That\'s a great point!',
      'I totally agree 👍',
      'Interesting perspective',
      'Can you explain more?',
      'Thanks for sharing!',
      'Yes, absolutely! 💯',
      'I have a different view on this',
      'Let me add to that...',
      'Very well said! 👏',
      'That makes sense 🤔'
    ];
    
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: randomParticipant.name,
      text: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date(),
      avatar: randomParticipant.avatar,
      isCurrentUser: false
    };
    
    this.chatMessages.update(msgs => [...msgs, newMsg]);
  }
  
  toggleMuteParticipant(participant: any): void {
    const currentUser = this.roomParticipants().find(p => p.isCurrentUser);
    
    // Only creator can mute others
    if (!currentUser?.isCreator) return;
    if (participant.isCurrentUser) return; // Can't mute yourself through this method
    
    this.roomParticipants.update(participants => 
      participants.map(p => 
        p.id === participant.id ? { ...p, isMuted: !p.isMuted } : p
      )
    );
  }
  
  toggleChatForAll(): void {
    const currentUser = this.roomParticipants().find(p => p.isCurrentUser);
    if (!currentUser?.isCreator) return;
    
    this.isChatDisabled.update(disabled => !disabled);
  }
  
  toggleSelfMute(): void {
    this.isUserMuted.update(muted => !muted);
  }
  
  toggleEmojiPicker(): void {
    this.showEmojiPicker.update(show => !show);
  }
  
  getTimeAgoText(minutes: number): string {
    if (minutes === 0) return 'Just joined';
    if (minutes === 1) return '1 min ago';
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }
  
  getLevelBadgeClass(level: string): string {
    return `level-${level.toLowerCase()}`;
  }
  
  getGenderIcon(gender: string): string {
    return gender === 'male' ? '👨' : '👩';
  }
  
  formatTimestamp(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins === 1) return '1 min ago';
    if (diffMins < 60) return `${diffMins} min ago`;
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${displayHours}:${displayMinutes} ${ampm}`;
  }
  
  isCurrentUserCreator(): boolean {
    return !!this.roomParticipants().find(p => p.isCurrentUser)?.isCreator;
  }
}
