import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastService } from '../../core/services/toast.service';

interface DialogueLine {
  id: number;
  speaker: string;
  text: string;
  timestamp: number;
  audioUrl?: string;
}

interface VocabularyItem {
  word: string;
  meaning: string;
  example: string;
  audioUrl?: string;
}

interface GrammarPoint {
  title: string;
  explanation: string;
  examples: string[];
}

interface AIFeedback {
  overallScore: number;
  pronunciation: {
    score: number;
    errors: string[];
    suggestions: string[];
  };
  grammar: {
    score: number;
    errors: string[];
    corrections: string[];
  };
  fluency: {
    score: number;
    feedback: string;
  };
  accent: {
    score: number;
    tips: string[];
  };
}

interface MentorSession {
  id: string;
  mentorName: string;
  mentorPhoto: string;
  date: string;
  time: string;
  duration: string;
  availableSlots: number;
  price: number;
  topics: string[];
  rating: number;
}

interface LessonData {
  id: string;
  title: string;
  videoId: string;
  level: string;
  category: string;
  thumbnail: string;
  dialogue: DialogueLine[];
  vocabulary: VocabularyItem[];
  grammar: GrammarPoint[];
}

@Component({
  selector: 'app-lesson-detail',
  standalone: false,
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit, OnDestroy {
  lessonId: string = '';
  lessonData: LessonData | null = null;
  videoUrl: SafeResourceUrl | null = null;
  
  // Signals for reactive state
  currentLineId = signal<number | null>(null);
  isPlaying = signal(false);
  playbackSpeed = signal(1);
  showTranscript = signal(true);
  showVocabulary = signal(true);
  showGrammar = signal(true);
  currentTab = signal<'transcript' | 'vocabulary' | 'grammar'>('transcript');
  
  // Speech recognition
  isRecording = signal(false);
  recognizedText = signal('');
  pronunciationScore = signal<number | null>(null);
  
  // Progress tracking
  completedLines = signal<Set<number>>(new Set());
  bookmarkedLines = signal<Set<number>>(new Set());
  
  // AI Coach Integration
  aiFeedback = signal<AIFeedback | null>(null);
  isAnalyzing = signal(false);
  practiceHistory = signal<Array<{lineId: number; text: string; score: number; timestamp: Date}>>([]);
  showAIPanel = signal(false);
  
  // Live Mentor Sessions
  mentorSessions = signal<MentorSession[]>([]);
  showMentorPanel = signal(false);
  selectedMentorSession = signal<MentorSession | null>(null);

  private lessons: { [key: string]: LessonData } = {
    'cafe-conversation': {
      id: 'cafe-conversation',
      title: 'Coffee Shop Conversation',
      videoId: '_ldiu5OiA9g',
      level: 'beginner',
      category: 'daily',
      thumbnail: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      dialogue: [
        { id: 1, speaker: 'Priya', text: 'Hey, are you ready to order?', timestamp: 0 },
        { id: 2, speaker: 'Arjun', text: 'Hi! Yes, can I have a cappuccino?', timestamp: 3 },
        { id: 3, speaker: 'Priya', text: 'Sure! Would you like anything else with that?', timestamp: 6 },
        { id: 4, speaker: 'Arjun', text: 'Uh, try the coffee cake. It\'s delicious!', timestamp: 10 },
        { id: 5, speaker: 'Priya', text: 'Oh thanks! Why not? And some coffee cake please.', timestamp: 14 },
        { id: 6, speaker: 'Kavya', text: 'Hey, are you studying here too?', timestamp: 20 },
        { id: 7, speaker: 'Arjun', text: 'Yes, I am! So where are you from?', timestamp: 23 },
        { id: 8, speaker: 'Kavya', text: 'I\'m from Mumbai. Wow, that\'s so cool!', timestamp: 27 },
        { id: 9, speaker: 'Arjun', text: 'Thanks! What about you? Where are you from?', timestamp: 31 },
        { id: 10, speaker: 'Kavya', text: 'I\'m from Delhi. Oh, that\'s far!', timestamp: 35 },
        { id: 11, speaker: 'Arjun', text: 'Yes it is, but I\'ve met a lot of international students at our college.', timestamp: 39 },
        { id: 12, speaker: 'Kavya', text: 'Oh me too! I met someone from Bangalore yesterday.', timestamp: 45 },
        { id: 13, speaker: 'Arjun', text: 'It\'s great to be in such an international place!', timestamp: 50 },
        { id: 14, speaker: 'Priya', text: 'Excuse me, I\'ll bring you a cappuccino and coffee cake over to your table when they\'re ready.', timestamp: 55 },
        { id: 15, speaker: 'Arjun', text: 'Oh great, thank you!', timestamp: 62 },
        { id: 16, speaker: 'Priya', text: 'Along with your check.', timestamp: 65 }
      ],
      vocabulary: [
        { word: 'cappuccino', meaning: 'A type of coffee with steamed milk and foam', example: 'I ordered a cappuccino at the café.' },
        { word: 'delicious', meaning: 'Very tasty or pleasant to eat', example: 'This cake is absolutely delicious!' },
        { word: 'international', meaning: 'Involving different countries or cultures', example: 'Our college has many international students.' },
        { word: 'excuse me', meaning: 'Polite phrase to get attention or apologize', example: 'Excuse me, could you help me?' },
        { word: 'ready', meaning: 'Prepared or willing to do something', example: 'Are you ready to order now?' },
        { word: 'order', meaning: 'To request food or items to be brought', example: 'Can I take your order, please?' },
        { word: 'college', meaning: 'Educational institution after high school', example: 'I study engineering at college.' },
        { word: 'table', meaning: 'Furniture with flat top for eating or working', example: 'Please sit at that table.' },
        { word: 'check', meaning: 'Bill showing money owed for services', example: 'Can I have the check, please?' },
        { word: 'met', meaning: 'Past tense of meet; to come together', example: 'I met a new friend yesterday.' },
        { word: 'cool', meaning: 'Informal word meaning great or impressive', example: 'That\'s so cool!' },
        { word: 'studying', meaning: 'Learning or examining subjects', example: 'I\'m studying English at the library.' }
      ],
      grammar: [
        {
          title: 'Present Continuous for Current Actions',
          explanation: 'Use "am/is/are + verb-ing" to describe actions happening now.',
          examples: [
            'Are you studying here? (happening now)',
            'I\'m studying English. (current activity)',
            'They are waiting for coffee. (in progress)'
          ]
        },
        {
          title: 'Polite Requests with "Can I" and "Would you"',
          explanation: 'Use these phrases to ask for things politely.',
          examples: [
            'Can I have a cappuccino?',
            'Would you like anything else?',
            'Can I take your order?'
          ]
        },
        {
          title: 'Question Formation with "Where"',
          explanation: 'Use "Where + auxiliary verb + subject" to ask about locations.',
          examples: [
            'Where are you from?',
            'Where do you study?',
            'Where is the café?'
          ]
        },
        {
          title: 'Present Perfect "I\'ve met"',
          explanation: 'Use "have/has + past participle" for experiences up to now.',
          examples: [
            'I\'ve met many students. (life experience)',
            'She has visited three countries.',
            'We\'ve studied together before.'
          ]
        }
      ]
    },
    'museum-directions': {
      id: 'museum-directions',
      title: 'Asking for Directions',
      videoId: 'yRM4wsXQ5KI',
      level: 'beginner',
      category: 'travel',
      thumbnail: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80',
      dialogue: [
        { id: 1, speaker: 'Shopkeeper', text: 'Hi there! Can I help you find something?', timestamp: 0 },
        { id: 2, speaker: 'Rohan', text: 'Hi! I want to go to the Museum of Modern Art, but I\'m lost.', timestamp: 4 },
        { id: 3, speaker: 'Rohan', text: 'And my phone battery just died.', timestamp: 9 },
        { id: 4, speaker: 'Shopkeeper', text: 'Don\'t worry! I can give you directions.', timestamp: 12 },
        { id: 5, speaker: 'Rohan', text: 'Thank you! I\'m new to the city and I feel like I\'ve been walking in circles.', timestamp: 15 },
        { id: 6, speaker: 'Shopkeeper', text: 'So you\'re here on the corner of 84th and 3rd. Okay, I see.', timestamp: 21 },
        { id: 7, speaker: 'Shopkeeper', text: 'Go left onto 3rd and then walk two blocks.', timestamp: 27 },
        { id: 8, speaker: 'Rohan', text: 'Okay, two blocks. I understand. Then what do I do?', timestamp: 32 },
        { id: 9, speaker: 'Shopkeeper', text: 'And then at 82nd Street, turn right and walk four more blocks.', timestamp: 37 },
        { id: 10, speaker: 'Rohan', text: 'Okay, four more blocks. Then what?', timestamp: 43 },
        { id: 11, speaker: 'Shopkeeper', text: 'That\'s all! The museum\'s right there. You can\'t mistake it.', timestamp: 47 },
        { id: 12, speaker: 'Rohan', text: 'Thank you very much for your help!', timestamp: 52 },
        { id: 13, speaker: 'Shopkeeper', text: 'No problem! Enjoy the museum!', timestamp: 55 },
        { id: 14, speaker: 'Shopkeeper', text: 'And come back anytime if you want any souvenirs.', timestamp: 58 }
      ],
      vocabulary: [
        { word: 'lost', meaning: 'Unable to find your way or location', example: 'I\'m lost. Can you help me?' },
        { word: 'directions', meaning: 'Instructions for reaching a place', example: 'Can you give me directions to the station?' },
        { word: 'battery', meaning: 'Power source for electronic devices', example: 'My phone battery is dead.' },
        { word: 'corner', meaning: 'Place where two streets meet', example: 'The shop is on the corner.' },
        { word: 'blocks', meaning: 'Distance between streets in a city', example: 'Walk two blocks and turn left.' },
        { word: 'turn', meaning: 'Change direction while moving', example: 'Turn right at the next street.' },
        { word: 'museum', meaning: 'Building displaying art or history', example: 'Let\'s visit the art museum today.' },
        { word: 'souvenirs', meaning: 'Items bought as reminders of a place', example: 'I bought souvenirs for my family.' },
        { word: 'circles', meaning: 'Round shapes; going in circles means lost', example: 'I\'ve been walking in circles.' },
        { word: 'mistake', meaning: 'Error; "can\'t mistake it" means easy to find', example: 'You can\'t mistake the big building.' }
      ],
      grammar: [
        {
          title: 'Imperative Sentences for Directions',
          explanation: 'Use base verb form to give commands or instructions.',
          examples: [
            'Go left onto 3rd street.',
            'Walk two blocks.',
            'Turn right at the corner.'
          ]
        },
        {
          title: 'Present Continuous for Temporary Situations',
          explanation: 'Use "am/is/are + verb-ing" for temporary states.',
          examples: [
            'I\'m lost. (temporary state)',
            'My battery is dying. (happening now)',
            'I\'m walking in circles. (current action)'
          ]
        },
        {
          title: 'Modal Verb "Can" for Ability and Offers',
          explanation: 'Use "can" to express ability or make offers.',
          examples: [
            'Can I help you? (offer)',
            'I can give you directions. (ability)',
            'You can\'t mistake it. (impossibility)'
          ]
        }
      ]
    },
    'order-coffee': {
      id: 'order-coffee',
      title: 'Order a Coffee',
      videoId: 'order-coffee-local',
      level: 'beginner',
      category: 'daily',
      thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      dialogue: [
        { id: 1, speaker: 'Barista', text: 'Good morning! Welcome to Coffee House. What can I get for you today?', timestamp: 0 },
        { id: 2, speaker: 'Priya', text: 'Good morning! I\'d like a cappuccino, please.', timestamp: 4 },
        { id: 3, speaker: 'Barista', text: 'Sure! What size would you like? Small, medium, or large?', timestamp: 7 },
        { id: 4, speaker: 'Priya', text: 'I\'ll have a medium, please.', timestamp: 11 },
        { id: 5, speaker: 'Barista', text: 'Great choice! Would you like that hot or iced?', timestamp: 14 },
        { id: 6, speaker: 'Priya', text: 'Hot, please. Can I also get a chocolate muffin?', timestamp: 17 },
        { id: 7, speaker: 'Barista', text: 'Of course! Anything else?', timestamp: 21 },
        { id: 8, speaker: 'Priya', text: 'No, that\'s all. How much is it?', timestamp: 24 },
        { id: 9, speaker: 'Barista', text: 'That will be ₹350 in total.', timestamp: 27 },
        { id: 10, speaker: 'Priya', text: 'Here you go. Can I pay by card?', timestamp: 30 },
        { id: 11, speaker: 'Barista', text: 'Yes, of course. You can tap your card here.', timestamp: 33 },
        { id: 12, speaker: 'Priya', text: 'Perfect! Thank you so much!', timestamp: 36 }
      ],
      vocabulary: [
        { word: 'cappuccino', meaning: 'Espresso coffee with steamed milk foam', example: 'I always order a cappuccino in the morning.' },
        { word: 'size', meaning: 'How big or small something is', example: 'What size drink would you like?' },
        { word: 'medium', meaning: 'Middle size, not too big or too small', example: 'I\'ll have a medium coffee, please.' },
        { word: 'iced', meaning: 'Cold drink with ice cubes', example: 'I prefer iced coffee in summer.' },
        { word: 'muffin', meaning: 'Small sweet cake', example: 'The chocolate muffin looks delicious.' },
        { word: 'total', meaning: 'Final amount after adding everything', example: 'The total cost is ₹350.' },
        { word: 'tap', meaning: 'Touch lightly, especially for card payment', example: 'You can tap your card to pay.' },
        { word: 'barista', meaning: 'Person who makes and serves coffee', example: 'The barista makes excellent coffee.' }
      ],
      grammar: [
        {
          title: 'Polite Requests with "I\'d like" and "Can I"',
          explanation: 'Use "I\'d like" (I would like) for polite ordering and "Can I" to ask for things.',
          examples: [
            'I\'d like a cappuccino, please.',
            'Can I get a chocolate muffin?',
            'Can I pay by card?'
          ]
        },
        {
          title: 'Size and Preference Questions',
          explanation: 'Questions about size and preferences using "would you like".',
          examples: [
            'What size would you like?',
            'Would you like that hot or iced?',
            'Would you like anything else?'
          ]
        },
        {
          title: 'Question Words: "How much"',
          explanation: 'Use "How much" to ask about price or cost.',
          examples: [
            'How much is it?',
            'How much does it cost?',
            'How much do I owe you?'
          ]
        }
      ]
    },
    'buy-museum-ticket': {
      id: 'buy-museum-ticket',
      title: 'Buy a Museum Ticket',
      videoId: 'buy-museum-ticket-local',
      level: 'beginner',
      category: 'travel',
      thumbnail: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80',
      dialogue: [
        { id: 1, speaker: 'Attendant', text: 'Hello! Welcome to the National Museum. How may I help you?', timestamp: 0 },
        { id: 2, speaker: 'Arjun', text: 'Hi! I\'d like to buy a ticket for the museum, please.', timestamp: 4 },
        { id: 3, speaker: 'Attendant', text: 'Certainly! Are you a student or an adult?', timestamp: 8 },
        { id: 4, speaker: 'Arjun', text: 'I\'m a student. Do you offer student discounts?', timestamp: 11 },
        { id: 5, speaker: 'Attendant', text: 'Yes, we do! Student tickets are ₹200. Do you have your student ID?', timestamp: 15 },
        { id: 6, speaker: 'Arjun', text: 'Yes, here it is. Can I also get an audio guide?', timestamp: 20 },
        { id: 7, speaker: 'Attendant', text: 'Of course! The audio guide is ₹100 extra. What language would you prefer?', timestamp: 24 },
        { id: 8, speaker: 'Arjun', text: 'English, please. Are there any special exhibitions today?', timestamp: 29 },
        { id: 9, speaker: 'Attendant', text: 'Yes! We have an Indian art exhibition on the second floor.', timestamp: 33 },
        { id: 10, speaker: 'Arjun', text: 'That sounds interesting! Is it included in the ticket price?', timestamp: 38 },
        { id: 11, speaker: 'Attendant', text: 'Yes, it\'s included. Your total is ₹300.', timestamp: 42 },
        { id: 12, speaker: 'Arjun', text: 'Perfect! Here\'s my card.', timestamp: 46 },
        { id: 13, speaker: 'Attendant', text: 'Thank you. Here\'s your ticket and audio guide. The museum closes at 6 PM.', timestamp: 49 },
        { id: 14, speaker: 'Arjun', text: 'Thank you! What time does the last entry close?', timestamp: 54 },
        { id: 15, speaker: 'Attendant', text: 'Last entry is at 5:30 PM. Enjoy your visit!', timestamp: 57 }
      ],
      vocabulary: [
        { word: 'ticket', meaning: 'Paper or card that allows entry', example: 'I need to buy a ticket for the museum.' },
        { word: 'student discount', meaning: 'Reduced price for students', example: 'Students get a 50% discount.' },
        { word: 'audio guide', meaning: 'Device that plays information about exhibits', example: 'The audio guide explains each painting.' },
        { word: 'exhibition', meaning: 'Public display of art or objects', example: 'There\'s a special exhibition on modern art.' },
        { word: 'included', meaning: 'Part of the package, no extra cost', example: 'Lunch is included in the tour price.' },
        { word: 'attendant', meaning: 'Person who helps customers or visitors', example: 'The museum attendant was very helpful.' },
        { word: 'entry', meaning: 'Act of entering or admission', example: 'Last entry is at 5 PM.' },
        { word: 'floor', meaning: 'Level of a building', example: 'The exhibition is on the second floor.' },
        { word: 'prefer', meaning: 'Like one thing more than another', example: 'Which language do you prefer?' },
        { word: 'ID', meaning: 'Identification card', example: 'Please show your student ID.' },
        { word: 'closes', meaning: 'Stops being open', example: 'The museum closes at 6 PM.' }
      ],
      grammar: [
        {
          title: 'Questions with "Do you" for Yes/No Answers',
          explanation: 'Use "Do you + verb" to ask questions expecting yes or no.',
          examples: [
            'Do you offer student discounts?',
            'Do you have your student ID?',
            'Do you want an audio guide?'
          ]
        },
        {
          title: 'Modal "Would" for Preferences',
          explanation: 'Use "would" to ask about preferences politely.',
          examples: [
            'What language would you prefer?',
            'What would you like to see?',
            'Would you like a map?'
          ]
        },
        {
          title: 'Present Simple for General Information',
          explanation: 'Use present simple to state facts and schedules.',
          examples: [
            'The museum closes at 6 PM.',
            'Last entry is at 5:30 PM.',
            'Student tickets are ₹200.'
          ]
        },
        {
          title: 'Questions with "Is there" / "Are there"',
          explanation: 'Use these to ask about existence of things.',
          examples: [
            'Are there any special exhibitions?',
            'Is it included in the price?',
            'Are there guided tours?'
          ]
        }
      ]
    },
    'how-i-get-to-school': {
      id: 'how-i-get-to-school',
      title: 'How I Get to School',
      videoId: 'how-i-get-to-school-local',
      level: 'beginner',
      category: 'daily',
      thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
      dialogue: [
        { id: 1, speaker: 'Kavya', text: 'Hey Rohan! How do you usually get to school?', timestamp: 0 },
        { id: 2, speaker: 'Rohan', text: 'Hi Kavya! I usually take the metro. It\'s really convenient.', timestamp: 4 },
        { id: 3, speaker: 'Kavya', text: 'Oh, that\'s nice! How long does it take?', timestamp: 8 },
        { id: 4, speaker: 'Rohan', text: 'It takes about 30 minutes from my home to the school station.', timestamp: 11 },
        { id: 5, speaker: 'Kavya', text: 'That\'s not bad! Do you walk to the metro station?', timestamp: 16 },
        { id: 6, speaker: 'Rohan', text: 'Yes, it\'s just a 10-minute walk from my house. What about you?', timestamp: 20 },
        { id: 7, speaker: 'Kavya', text: 'I take the school bus. It picks me up at 7:30 AM every morning.', timestamp: 25 },
        { id: 8, speaker: 'Rohan', text: 'That\'s convenient! Do you have to wait long for the bus?', timestamp: 30 },
        { id: 9, speaker: 'Kavya', text: 'No, it\'s always on time. The journey takes about 40 minutes.', timestamp: 34 },
        { id: 10, speaker: 'Rohan', text: 'Do you ever walk or cycle to school?', timestamp: 39 },
        { id: 11, speaker: 'Kavya', text: 'Sometimes I cycle on weekends when I have extra classes.', timestamp: 43 },
        { id: 12, speaker: 'Rohan', text: 'That\'s great exercise! I should try cycling too.', timestamp: 48 },
        { id: 13, speaker: 'Kavya', text: 'You should! It\'s fun and healthy. Plus, you save money on transport!', timestamp: 52 }
      ],
      vocabulary: [
        { word: 'usually', meaning: 'Most of the time, normally', example: 'I usually take the bus to school.' },
        { word: 'metro', meaning: 'Underground train system', example: 'The metro is faster than buses.' },
        { word: 'convenient', meaning: 'Easy to use or suitable', example: 'Online shopping is very convenient.' },
        { word: 'takes', meaning: 'Requires a certain amount of time', example: 'It takes 20 minutes to walk there.' },
        { word: 'station', meaning: 'Place where trains or buses stop', example: 'Meet me at the metro station.' },
        { word: 'picks up', meaning: 'Collects someone in a vehicle', example: 'The bus picks me up at 8 AM.' },
        { word: 'journey', meaning: 'Trip from one place to another', example: 'The journey was very comfortable.' },
        { word: 'cycle', meaning: 'Ride a bicycle', example: 'I cycle to work every day.' },
        { word: 'exercise', meaning: 'Physical activity for health', example: 'Walking is good exercise.' },
        { word: 'transport', meaning: 'Way of traveling or moving', example: 'Public transport is affordable.' }
      ],
      grammar: [
        {
          title: 'Present Simple for Routines and Habits',
          explanation: 'Use present simple to talk about regular activities and daily routines.',
          examples: [
            'I usually take the metro.',
            'It takes 30 minutes.',
            'The bus picks me up at 7:30.'
          ]
        },
        {
          title: 'Question Formation with "How"',
          explanation: 'Use "How" to ask about methods, time, and manner.',
          examples: [
            'How do you get to school?',
            'How long does it take?',
            'How far is it?'
          ]
        },
        {
          title: 'Frequency Adverbs: "usually", "always", "sometimes"',
          explanation: 'These words show how often something happens.',
          examples: [
            'I usually take the bus. (most times)',
            'It\'s always on time. (every time)',
            'Sometimes I cycle. (occasionally)'
          ]
        }
      ]
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonId = params['id'];
      this.loadLesson();
    });
  }

  ngOnDestroy(): void {
    this.stopAllAudio();
  }

  loadLesson(): void {
    this.lessonData = this.lessons[this.lessonId] || null;
    if (this.lessonData) {
      this.loadMentorSessions();
      // Check if it's a local video or YouTube video
      if (this.lessonData.videoId.includes('local')) {
        // Use local video from assets folder
        let videoFileName = '';
        switch (this.lessonId) {
          case 'order-coffee':
            videoFileName = 'Order a coffee.mp4'; // Note: filename has leading space
            break;
          case 'buy-museum-ticket':
            videoFileName = 'Buy a museum ticket.mp4';
            break;
          case 'how-i-get-to-school':
            videoFileName = 'how I get to school.mp4';
            break;
        }
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `${videoFileName}`
        );
      } else {
        // Use YouTube embed
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.lessonData.videoId}?enablejsapi=1`
        );
      }
    }
  }

  playLine(line: DialogueLine): void {
    this.currentLineId.set(line.id);
    
    // Use Web Speech API for text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(line.text);
      utterance.lang = 'en-US';
      utterance.rate = this.playbackSpeed();
      
      // Set female voice
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('female') ||
        voice.name.includes('Samantha') ||
        voice.name.includes('Victoria')
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      utterance.onend = () => {
        this.currentLineId.set(null);
        this.completedLines.update(lines => new Set([...lines, line.id]));
      };
      
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }

  playVocabulary(word: VocabularyItem): void {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      
      const voices = speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || voice.name.includes('Samantha')
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  }

  stopAllAudio(): void {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  toggleBookmark(lineId: number): void {
    this.bookmarkedLines.update(lines => {
      const newSet = new Set(lines);
      if (newSet.has(lineId)) {
        newSet.delete(lineId);
      } else {
        newSet.add(lineId);
      }
      return newSet;
    });
  }

  setPlaybackSpeed(speed: number): void {
    this.playbackSpeed.set(speed);
  }

  switchTab(tab: 'transcript' | 'vocabulary' | 'grammar'): void {
    this.currentTab.set(tab);
  }

  startRecording(line: DialogueLine): void {
    if (!('webkitSpeechRecognition' in window)) {
      this.toastService.error('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    this.isRecording.set(true);
    this.recognizedText.set('');

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.recognizedText.set(transcript);
      const score = this.calculatePronunciationScore(line.text, transcript);
      
      // Add to practice history
      this.practiceHistory.update(history => [
        ...history,
        { lineId: line.id, text: transcript, score, timestamp: new Date() }
      ]);
      
      // Generate AI feedback
      this.generateAIFeedback(line.text, transcript, score);
      this.isRecording.set(false);
    };

    recognition.onerror = () => {
      this.isRecording.set(false);
      this.toastService.error('Error in speech recognition. Please try again.');
    };

    recognition.onend = () => {
      this.isRecording.set(false);
    };

    recognition.start();
  }

  calculatePronunciationScore(original: string, spoken: string): number {
    const originalWords = original.toLowerCase().split(/\s+/);
    const spokenWords = spoken.toLowerCase().split(/\s+/);
    
    let matches = 0;
    for (const word of spokenWords) {
      if (originalWords.includes(word)) {
        matches++;
      }
    }
    
    const score = Math.round((matches / originalWords.length) * 100);
    this.pronunciationScore.set(Math.min(score, 100));
    return Math.min(score, 100);
  }

  getProgressPercentage(): number {
    if (!this.lessonData) return 0;
    return Math.round((this.completedLines().size / this.lessonData.dialogue.length) * 100);
  }

  goBack(): void {
    this.router.navigate(['/learning']);
  }

  downloadTranscript(): void {
    if (!this.lessonData) return;
    
    let content = `${this.lessonData.title}\n\n`;
    content += 'TRANSCRIPT:\n\n';
    
    this.lessonData.dialogue.forEach(line => {
      content += `${line.speaker}: ${line.text}\n`;
    });
    
    content += '\n\nVOCABULARY:\n\n';
    this.lessonData.vocabulary.forEach(item => {
      content += `${item.word}: ${item.meaning}\n`;
      content += `Example: ${item.example}\n\n`;
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.lessonData.id}-transcript.txt`;
    a.click();
  }

  // AI Coach Methods
  generateAIFeedback(original: string, spoken: string, score: number): void {
    this.isAnalyzing.set(true);
    
    // Simulate AI analysis (replace with actual AI API call)
    setTimeout(() => {
      const originalWords = original.toLowerCase().split(/\s+/);
      const spokenWords = spoken.toLowerCase().split(/\s+/);
      
      // Find pronunciation errors
      const pronunciationErrors: string[] = [];
      const missedWords = originalWords.filter(word => !spokenWords.includes(word));
      if (missedWords.length > 0) {
        pronunciationErrors.push(`Missed words: ${missedWords.join(', ')}`);
      }
      
      // Check grammar (basic analysis)
      const grammarErrors: string[] = [];
      const corrections: string[] = [];
      if (!spoken.match(/^[A-Z]/)) {
        grammarErrors.push('Sentence should start with a capital letter');
        corrections.push('Always begin sentences with uppercase');
      }
      if (!spoken.match(/[.!?]$/)) {
        grammarErrors.push('Missing punctuation at the end');
      }
      
      // Fluency analysis
      const wordCount = spokenWords.length;
      const fluencyScore = Math.min(100, (wordCount / originalWords.length) * 100);
      let fluencyFeedback = '';
      if (fluencyScore >= 90) {
        fluencyFeedback = 'Excellent fluency! You spoke naturally and smoothly.';
      } else if (fluencyScore >= 70) {
        fluencyFeedback = 'Good fluency, but try to speak more smoothly without long pauses.';
      } else {
        fluencyFeedback = 'Practice more to improve fluency. Try speaking the sentence multiple times.';
      }
      
      // Accent tips
      const accentTips: string[] = [
        'Focus on word stress patterns',
        'Practice intonation at the end of questions',
        'Clear pronunciation of consonant clusters'
      ];
      
      const feedback: AIFeedback = {
        overallScore: Math.round((score + fluencyScore) / 2),
        pronunciation: {
          score: score,
          errors: pronunciationErrors,
          suggestions: [
            'Listen to native speakers carefully',
            'Record yourself and compare with the original',
            'Practice difficult words slowly first'
          ]
        },
        grammar: {
          score: grammarErrors.length === 0 ? 100 : 75,
          errors: grammarErrors.length > 0 ? grammarErrors : ['No major errors detected'],
          corrections: corrections.length > 0 ? corrections : ['Keep up the good work!']
        },
        fluency: {
          score: Math.round(fluencyScore),
          feedback: fluencyFeedback
        },
        accent: {
          score: Math.max(60, score - 10),
          tips: accentTips
        }
      };
      
      this.aiFeedback.set(feedback);
      this.showAIPanel.set(true);
      this.isAnalyzing.set(false);
    }, 1500);
  }

  toggleAIPanel(): void {
    this.showAIPanel.update(show => !show);
  }

  closeAIPanel(): void {
    this.showAIPanel.set(false);
  }

  // Live Mentor Methods
  loadMentorSessions(): void {
    // Mock mentor sessions (replace with API call)
    const mockSessions: MentorSession[] = [
      {
        id: 'ms-1',
        mentorName: 'Dr. Priya Sharma',
        mentorPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
        date: '2025-12-18',
        time: '10:00 AM IST',
        duration: '60 minutes',
        availableSlots: 5,
        price: 500,
        topics: ['Video Context Explanation', 'Grammar Deep Dive', 'Q&A Session'],
        rating: 4.8
      },
      {
        id: 'ms-2',
        mentorName: 'Prof. Arjun Patel',
        mentorPhoto: 'https://randomuser.me/api/portraits/men/32.jpg',
        date: '2025-12-19',
        time: '3:00 PM IST',
        duration: '45 minutes',
        availableSlots: 8,
        price: 400,
        topics: ['Pronunciation Practice', 'Cultural Context', 'Doubt Resolution'],
        rating: 4.9
      },
      {
        id: 'ms-3',
        mentorName: 'Ms. Kavya Reddy',
        mentorPhoto: 'https://randomuser.me/api/portraits/women/68.jpg',
        date: '2025-12-20',
        time: '6:00 PM IST',
        duration: '90 minutes',
        availableSlots: 3,
        price: 700,
        topics: ['Complete Scene Analysis', 'Vocabulary Building', 'Real-life Application'],
        rating: 5.0
      }
    ];
    
    this.mentorSessions.set(mockSessions);
  }

  toggleMentorPanel(): void {
    this.showMentorPanel.update(show => !show);
  }

  closeMentorPanel(): void {
    this.showMentorPanel.set(false);
    this.selectedMentorSession.set(null);
  }

  selectMentorSession(session: MentorSession): void {
    this.selectedMentorSession.set(session);
  }

  bookMentorSession(session: MentorSession): void {
    this.toastService.success(`Booking session with ${session.mentorName}!`);
    setTimeout(() => {
      this.toastService.info('Redirecting to payment page...');
      // In production: this.router.navigate(['/live', 'book', session.id]);
    }, 1500);
  }

  navigateToAICoach(): void {
    this.router.navigate(['/ai-coach'], {
      queryParams: {
        lessonId: this.lessonId,
        practiceData: JSON.stringify(this.practiceHistory())
      }
    });
  }

  navigateToLiveSessions(): void {
    this.router.navigate(['/live'], {
      queryParams: { lessonId: this.lessonId }
    });
  }
}