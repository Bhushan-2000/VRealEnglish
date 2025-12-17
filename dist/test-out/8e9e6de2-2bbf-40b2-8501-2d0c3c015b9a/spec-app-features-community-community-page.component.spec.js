import {
  WalletService,
  init_wallet_service
} from "./chunk-6QB3NW6W.js";
import {
  ToastService,
  init_toast_service
} from "./chunk-U4UBZW3U.js";
import {
  Router,
  init_router
} from "./chunk-VTEW27YV.js";
import "./chunk-2NDX233R.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  provideZonelessChangeDetection,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/community/community-page.component.html
var community_page_component_default;
var init_community_page_component = __esm({
  "angular:jit:template:src/app/features/community/community-page.component.html"() {
    community_page_component_default = `<div class="community-container">
  <div class="container">
    <button class="back-btn" (click)="goBack()">
      <span class="back-icon">\u2190</span> Back to Home
    </button>
    <div class="page-header">
      <h1>Community Hub</h1>
      <p class="page-subtitle">Connect with Real English Speakers Worldwide</p>
    </div>

    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        class="tab-btn" 
        [class.active]="activeTab === '1on1'"
        (click)="activeTab = '1on1'">
        <span class="tab-icon">\u{1F465}</span>
        1:1 Practice Rooms
      </button>
      <button 
        class="tab-btn" 
        [class.active]="activeTab === 'group'"
        (click)="activeTab = 'group'">
        <span class="tab-icon">\u{1F399}\uFE0F</span>
        Group Discussions
      </button>
    </div>

    <!-- 1:1 Practice Rooms Section -->
    <div class="section-content" *ngIf="activeTab === '1on1'">
      <div class="section-header">
        <h2>1:1 Speaking Practice</h2>
        <p>Connect instantly with English speakers around the world</p>
      </div>

      <!-- Live Members Counter -->
      <div class="live-counter">
        <span class="live-indicator"></span>
        <strong>{{ liveMembers }}</strong> members available now
      </div>

      <!-- Filter Options -->
      <div class="filter-section">
        <div class="filter-group">
          <label>Gender Preference</label>
          <div class="filter-buttons">
            <button 
              class="filter-btn"
              [class.active]="genderFilter === 'any'"
              [disabled]="isInCall"
              (click)="genderFilter = 'any'; updateLiveMemberCount()">
              Any
            </button>
            <button 
              class="filter-btn"
              [class.active]="genderFilter === 'male'"
              [disabled]="isInCall"
              (click)="genderFilter = 'male'; updateLiveMemberCount()">
              Male
            </button>
            <button 
              class="filter-btn"
              [class.active]="genderFilter === 'female'"
              [disabled]="isInCall"
              (click)="genderFilter = 'female'; updateLiveMemberCount()">
              Female
            </button>
          </div>
        </div>

        <div class="filter-group">
          <label>Speaking Level</label>
          <div class="filter-buttons">
            <button 
              class="filter-btn"
              [class.active]="levelFilter === 'basic'"
              [disabled]="isInCall"
              (click)="levelFilter = 'basic'; updateLiveMemberCount()">
              Basic
            </button>
            <button 
              class="filter-btn"
              [class.active]="levelFilter === 'intermediate'"
              [disabled]="isInCall"
              (click)="levelFilter = 'intermediate'; updateLiveMemberCount()">
              Intermediate
            </button>
            <button 
              class="filter-btn"
              [class.active]="levelFilter === 'advanced'"
              [disabled]="isInCall"
              (click)="levelFilter = 'advanced'; updateLiveMemberCount()">
              Advanced
            </button>
          </div>
        </div>
      </div>

      <!-- Call Action -->
      <div class="call-action-section" *ngIf="!isInCall">
        <button class="call-now-btn" (click)="startCall()">
          <span class="call-icon">\u{1F4DE}</span>
          Call Now
        </button>
        <p class="call-info">You'll be matched with a partner in seconds</p>
      </div>

      <!-- Active Call Interface -->
      <div class="active-call" *ngIf="isInCall">
        <!-- Connecting State -->
        <div class="connecting-state" *ngIf="callState === 'connecting'">
          <div class="spinner"></div>
          <h3>Connecting to partner...</h3>
          <p>Finding the perfect match for you</p>
        </div>

        <!-- Connected State -->
        <div class="connected-state" *ngIf="callState === 'connected'">
          <div class="call-header">
            <div class="call-timer">
              <span class="timer-icon">\u23F1\uFE0F</span>
              <span class="timer-text">{{ formatTime(callDuration) }}</span>
            </div>
            <button class="end-call-btn" (click)="endCall()">
              <span>End Call</span>
            </button>
          </div>

          <div class="participants">
            <div class="participant me">
              <div class="participant-avatar">
                <img [src]="currentUser.avatar" [alt]="currentUser.name">
                <div class="voice-indicator" [class.active]="myVoiceActive()"></div>
              </div>
              <div class="participant-info">
                <h4>{{ currentUser.name }} (You)</h4>
                <p class="participant-level">{{ currentUser.level }}</p>
              </div>
            </div>

            <div class="call-animation">
              <div class="sound-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="participant partner">
              <div class="participant-avatar">
                <img [src]="partner.avatar" [alt]="partner.name">
                <div class="voice-indicator" [class.active]="partnerVoiceActive()"></div>
              </div>
              <div class="participant-info">
                <h4>{{ partner.name }}</h4>
                <p class="participant-level">{{ partner.level }} \u2022 {{ partner.country }}</p>
              </div>
            </div>
          </div>

          <div class="call-controls">
            <button 
              class="control-btn" 
              [class.active]="isMuted"
              (click)="toggleMute()">
              <span>{{ isMuted ? '\u{1F507}' : '\u{1F3A4}' }}</span>
            </button>
            <button 
              class="control-btn" 
              (click)="reportIssue()">
              <span>\u26A0\uFE0F</span>
            </button>
          </div>

          <div class="call-stats">
            <div class="stat">
              <span class="stat-label">English Speech Detected</span>
              <span class="stat-value">{{ englishMinutes() }} min</span>
            </div>
            <div class="stat">
              <span class="stat-label">Credits Earned</span>
              <span class="stat-value">+{{ creditsEarned() }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call History -->
      <div class="call-history" *ngIf="!isInCall && callHistory.length > 0">
        <h3>Recent Practice Sessions</h3>
        <div class="history-list">
          <div class="history-item" *ngFor="let call of callHistory">
            <div class="history-avatar">
              <img [src]="call.partnerAvatar" [alt]="call.partnerName">
            </div>
            <div class="history-details">
              <h4>{{ call.partnerName }}</h4>
              <p>{{ call.duration }} min \u2022 {{ call.date }}</p>
            </div>
            <div class="history-credits">
              <span>+{{ call.creditsEarned }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Group Discussion Section -->
    <div class="section-content" *ngIf="activeTab === 'group'">
      <div class="section-header">
        <h2>Group Discussions</h2>
        <p>Join or create live English conversation rooms</p>
        <button class="create-room-btn" (click)="openCreateRoomModal()">
          <span>\u2795</span> Create New Room
        </button>
      </div>

      <!-- Active Rooms -->
      <div class="rooms-grid">
        <div class="room-card" *ngFor="let room of activeRooms">
          <div class="room-header">
            <h3>{{ room.topic }}</h3>
            <span class="room-level-badge" [class]="room.level">{{ room.level }}</span>
          </div>
          <div class="room-info">
            <div class="room-participants">
              <div class="avatars-stack">
                <img 
                  *ngFor="let participant of room.participants.slice(0, 3)" 
                  [src]="participant.avatar" 
                  [alt]="participant.name"
                  class="participant-thumb">
                <span class="more-count" *ngIf="room.participants.length > 3">
                  +{{ room.participants.length - 3 }}
                </span>
              </div>
              <span class="participant-count">
                {{ room.participants.length }}/{{ room.maxParticipants }} members
              </span>
            </div>
            <div class="room-meta">
              <span class="room-duration">
                <span class="icon">\u23F1\uFE0F</span> {{ room.duration }} min
              </span>
              <span class="room-host">
                <span class="icon">\u{1F464}</span> {{ room.hostName }}
              </span>
            </div>
          </div>
          <button 
            class="join-room-btn" 
            (click)="joinRoom(room.id)"
            [disabled]="room.participants.length >= room.maxParticipants">
            {{ room.participants.length >= room.maxParticipants ? 'Room Full' : 'Join Discussion' }}
          </button>
        </div>
      </div>

      <!-- No Active Rooms -->
      <div class="empty-state" *ngIf="activeRooms.length === 0">
        <span class="empty-icon">\u{1F4AC}</span>
        <h3>No Active Rooms</h3>
        <p>Be the first to create a discussion room!</p>
        <button class="create-room-btn" (click)="openCreateRoomModal()">
          <span>\u2795</span> Create Room
        </button>
      </div>
    </div>

    <!-- Create Room Modal -->
    <div class="modal-overlay" *ngIf="showCreateRoomModal" (click)="closeCreateRoomModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Create Discussion Room</h3>
          <button class="close-btn" (click)="closeCreateRoomModal()">\u2715</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Room Topic</label>
            <input 
              type="text" 
              [(ngModel)]="newRoom.topic" 
              placeholder="e.g., Travel Experiences, Business English, Daily Life"
              class="form-input">
          </div>
          <div class="form-group">
            <label>Speaking Level</label>
            <select [(ngModel)]="newRoom.level" class="form-select">
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div class="form-group">
            <label>Max Participants</label>
            <input 
              type="number" 
              [(ngModel)]="newRoom.maxParticipants" 
              min="2" 
              max="10" 
              class="form-input">
          </div>
          <div class="form-actions">
            <button class="btn-secondary" (click)="closeCreateRoomModal()">Cancel</button>
            <button class="btn-primary" (click)="createRoom()">Create Room</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="info-section">
      <div class="info-card">
        <span class="info-icon">\u{1F4B0}</span>
        <h4>Earn While You Practice</h4>
        <p>Every minute of real English conversation earns you credits. Only genuine English speech is tracked.</p>
      </div>
      <div class="info-card">
        <span class="info-icon">\u{1F3AF}</span>
        <h4>AI-Verified Speech</h4>
        <p>Our advanced AI ensures only authentic English conversations count, maintaining quality standards.</p>
      </div>
      <div class="info-card">
        <span class="info-icon">\u{1F30D}</span>
        <h4>Global Community</h4>
        <p>Connect with learners from around the world and experience diverse accents and cultures.</p>
      </div>
    </div>
  </div>
</div>

<!-- Room Discussion Modal -->
<div class="modal-overlay" *ngIf="isRoomModalOpen()" (click)="closeRoomModal()">
  <div class="room-modal" (click)="$event.stopPropagation()">
    <div class="room-modal-header">
      <div class="room-header-info">
        <h2>{{ selectedRoom()?.topic }}</h2>
        <div class="room-meta">
          <span class="room-level level-{{ selectedRoom()?.level }}">
            {{ selectedRoom()?.level }}
          </span>
          <span class="room-duration">\u23F1\uFE0F {{ selectedRoom()?.duration }} min</span>
          <span class="room-members">\u{1F465} {{ roomParticipants().length }}/{{ selectedRoom()?.maxParticipants }}</span>
        </div>
      </div>
      <button class="close-btn" (click)="closeRoomModal()">\u2715</button>
    </div>
    
    <div class="room-modal-body">
      <!-- Left Side: Participants -->
      <div class="participants-panel">
        <div class="participants-header">
          <h3>Participants</h3>
          <span class="participant-count">{{ roomParticipants().length }}</span>
        </div>
        
        <div class="participants-list">
          <div 
            *ngFor="let participant of roomParticipants()" 
            class="participant-card"
            [class.current-user]="participant.isCurrentUser"
            [class.creator]="participant.isCreator">
            
            <img [src]="participant.avatar" [alt]="participant.name" class="participant-avatar">
            
            <div class="participant-info">
              <div class="participant-name-row">
                <span class="participant-name">{{ participant.name }}</span>
                <span *ngIf="participant.isCreator" class="creator-badge">\u{1F451} Host</span>
              </div>
              
              <div class="participant-details">
                <span class="participant-gender">{{ getGenderIcon(participant.gender) }}</span>
                <span class="participant-level" [ngClass]="getLevelBadgeClass(participant.level)">
                  {{ participant.level }}
                </span>
                <span class="participant-time">{{ getTimeAgoText(participant.joinedAgo) }}</span>
              </div>
            </div>
            
            <div class="participant-controls" *ngIf="!participant.isCurrentUser && isCurrentUserCreator()">
              <button 
                class="control-btn mute-btn"
                [class.muted]="participant.isMuted"
                (click)="toggleMuteParticipant(participant)"
                [title]="participant.isMuted ? 'Unmute' : 'Mute'">
                {{ participant.isMuted ? '\u{1F507}' : '\u{1F50A}' }}
              </button>
            </div>
            
            <div class="participant-status" *ngIf="participant.isCurrentUser">
              <button 
                class="control-btn self-mute-btn"
                [class.muted]="isUserMuted()"
                (click)="toggleSelfMute()"
                [title]="isUserMuted() ? 'Unmute yourself' : 'Mute yourself'">
                {{ isUserMuted() ? '\u{1F507}' : '\u{1F3A4}' }}
              </button>
            </div>
            
            <div class="muted-indicator" *ngIf="participant.isMuted && !participant.isCurrentUser">
              <span class="muted-text">Muted by host</span>
            </div>
          </div>
        </div>
        
        <!-- Creator Controls -->
        <div class="creator-controls" *ngIf="isCurrentUserCreator()">
          <button 
            class="creator-control-btn"
            [class.active]="isChatDisabled()"
            (click)="toggleChatForAll()">
            {{ isChatDisabled() ? '\u{1F513} Enable Chat for All' : '\u{1F512} Disable Chat for All' }}
          </button>
        </div>
      </div>
      
      <!-- Right Side: Chat -->
      <div class="chat-panel">
        <div class="chat-header">
          <h3>Discussion Chat</h3>
          <div class="chat-status" *ngIf="isChatDisabled()">
            <span class="disabled-badge">Chat Disabled by Host</span>
          </div>
          <div class="chat-status" *ngIf="isUserMuted() && !isChatDisabled()">
            <span class="muted-badge">You are muted</span>
          </div>
        </div>
        
        <div class="chat-messages">
          <div 
            *ngFor="let message of chatMessages()" 
            class="chat-message"
            [class.own-message]="message.isCurrentUser">
            
            <img [src]="message.avatar" [alt]="message.sender" class="message-avatar">
            
            <div class="message-content">
              <div class="message-header">
                <span class="message-sender">{{ message.sender }}</span>
                <span class="message-time">{{ formatTimestamp(message.timestamp) }}</span>
              </div>
              <div class="message-text">{{ message.text }}</div>
            </div>
          </div>
        </div>
        
        <div class="chat-input-container">
          <!-- Emoji Picker -->
          <div class="emoji-picker" *ngIf="showEmojiPicker()">
            <button 
              *ngFor="let emoji of emojis" 
              class="emoji-btn"
              (click)="sendEmoji(emoji)">
              {{ emoji }}
            </button>
          </div>
          
          <div class="chat-input-wrapper">
            <button 
              class="emoji-toggle-btn"
              (click)="toggleEmojiPicker()"
              [disabled]="isChatDisabled() || isUserMuted()">
              \u{1F60A}
            </button>
            
            <input 
              type="text"
              class="chat-input"
              placeholder="{{ isChatDisabled() ? 'Chat disabled by host' : isUserMuted() ? 'You are muted' : 'Type your message...' }}"
              [(ngModel)]="newMessage"
              (keyup.enter)="sendMessage()"
              [disabled]="isChatDisabled() || isUserMuted()">
            
            <button 
              class="send-btn"
              (click)="sendMessage()"
              [disabled]="!newMessage() || isChatDisabled() || isUserMuted()">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/features/community/community-page.component.css
var community_page_component_default2;
var init_community_page_component2 = __esm({
  "angular:jit:style:src/app/features/community/community-page.component.css"() {
    community_page_component_default2 = "/* src/app/features/community/community-page.component.css */\n.community-container {\n  min-height: 100vh;\n  padding: 5rem 0 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.05),\n      rgba(0, 194, 138, 0.05));\n  border-radius: 16px;\n  border: 2px solid rgba(11, 110, 255, 0.1);\n}\n.page-header h1 {\n  font-size: 2rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n}\n.page-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n}\n.tab-navigation {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  background: white;\n  padding: 0.5rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.tab-btn {\n  flex: 1;\n  padding: 0.875rem;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.tab-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  color: white;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n}\n.tab-icon {\n  font-size: 1.25rem;\n}\n.section-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.section-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.section-header p {\n  font-size: 1rem;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.live-counter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 1.25rem;\n  background: white;\n  border: 2px solid #00C28A;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-size: 1rem;\n  color: #0f1724;\n  box-shadow: 0 4px 20px rgba(0, 194, 138, 0.15);\n}\n.live-indicator {\n  width: 10px;\n  height: 10px;\n  background: #00C28A;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n  box-shadow: 0 0 15px #00C28A;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.3);\n  }\n}\n.live-counter strong {\n  color: #00C28A;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n.filter-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 16px;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.filter-group {\n  margin-bottom: 1.25rem;\n}\n.filter-group:last-child {\n  margin-bottom: 0;\n}\n.filter-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n}\n.filter-buttons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n}\n.filter-btn {\n  padding: 0.875rem;\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.filter-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  border-color: #0B6EFF;\n  color: white;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n}\n.filter-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.call-action-section {\n  text-align: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border-radius: 16px;\n  margin: 1.5rem 0;\n  border: 2px solid #e9ecef;\n}\n.call-now-btn {\n  width: 100%;\n  max-width: 280px;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  font-size: 1.125rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  margin: 0 auto 1rem;\n  box-shadow: 0 6px 24px rgba(11, 110, 255, 0.35);\n}\n.call-now-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.5);\n  background:\n    linear-gradient(\n      135deg,\n      #0a56cc,\n      #00a878);\n}\n.call-icon {\n  font-size: 1.5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.call-info {\n  font-size: 0.875rem;\n  color: #0f1724;\n  font-weight: 500;\n}\n.active-call {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 2px solid #e9ecef;\n}\n.connecting-state {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.spinner {\n  width: 60px;\n  height: 60px;\n  border: 4px solid rgba(11, 110, 255, 0.1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.connecting-state h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.connecting-state p {\n  font-size: 1rem;\n  color: #6c757d;\n}\n.call-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.call-timer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0B6EFF;\n  text-shadow: 0 0 10px rgba(11, 110, 255, 0.5);\n}\n.timer-icon {\n  font-size: 1.25rem;\n}\n.end-call-btn {\n  padding: 0.625rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #ff3b30,\n      #d62d24);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 59, 48, 0.3);\n}\n.end-call-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #d62d24,\n      #b8231a);\n  box-shadow: 0 6px 20px rgba(255, 59, 48, 0.5);\n  transform: translateY(-2px);\n}\n.participants {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.participant {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.participant-avatar {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  flex-shrink: 0;\n}\n.participant-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #0B6EFF;\n  box-shadow: 0 0 15px rgba(11, 110, 255, 0.4);\n}\n.voice-indicator {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 20px;\n  height: 20px;\n  background: #00C28A;\n  border: 3px solid rgba(15, 23, 36, 0.8);\n  border-radius: 50%;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  box-shadow: 0 0 10px #00C28A;\n}\n.voice-indicator.active {\n  opacity: 1;\n  animation: voicePulse 1s infinite;\n}\n@keyframes voicePulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.participant-info h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.25rem;\n}\n.participant-level {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.call-animation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0;\n}\n.sound-wave {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  height: 40px;\n}\n.sound-wave span {\n  width: 4px;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border-radius: 2px;\n  animation: wave 1.2s ease-in-out infinite;\n  box-shadow: 0 0 10px rgba(11, 110, 255, 0.5);\n}\n.sound-wave span:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.sound-wave span:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.sound-wave span:nth-child(4) {\n  animation-delay: 0.3s;\n}\n@keyframes wave {\n  0%, 100% {\n    height: 20%;\n  }\n  50% {\n    height: 100%;\n  }\n}\n.call-controls {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.control-btn {\n  width: 60px;\n  height: 60px;\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.control-btn.active {\n  background: #ff3b30;\n  border-color: #ff3b30;\n  box-shadow: 0 4px 15px rgba(255, 59, 48, 0.3);\n}\n.control-btn:hover {\n  transform: scale(1.1);\n  background: white;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.call-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.stat {\n  text-align: center;\n}\n.stat-label {\n  display: block;\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.stat-value {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0B6EFF;\n}\n.call-history {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.call-history h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 1.5rem;\n}\n.history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.history-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.history-item:hover {\n  background: white;\n  border-color: #0B6EFF;\n  transform: translateX(5px);\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.15);\n}\n.history-avatar {\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n.history-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.history-details {\n  flex: 1;\n}\n.history-details h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.25rem;\n}\n.history-details p {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.history-credits {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #00ff88;\n}\n.rooms-grid {\n  display: grid;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.room-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 2px solid #e9ecef;\n}\n.room-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n  border-color: #0B6EFF;\n}\n.room-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.room-header h3 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n  flex: 1;\n}\n.room-level-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.room-level-badge.basic {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 194, 138, 0.2),\n      rgba(52, 199, 89, 0.2));\n  color: #00C28A;\n  border: 1px solid rgba(0, 194, 138, 0.3);\n  box-shadow: 0 0 10px rgba(0, 194, 138, 0.3);\n}\n.room-level-badge.intermediate {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.2),\n      rgba(10, 86, 204, 0.2));\n  color: #0B6EFF;\n  border: 1px solid rgba(11, 110, 255, 0.3);\n  box-shadow: 0 0 10px rgba(11, 110, 255, 0.3);\n}\n.room-level-badge.advanced {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 59, 48, 0.2),\n      rgba(214, 45, 36, 0.2));\n  color: #ff3b30;\n  border: 1px solid rgba(255, 59, 48, 0.3);\n  box-shadow: 0 0 10px rgba(255, 59, 48, 0.3);\n}\n.room-info {\n  margin-bottom: 1rem;\n}\n.room-participants {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.avatars-stack {\n  display: flex;\n  align-items: center;\n}\n.participant-thumb {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--surface);\n  margin-left: -8px;\n  object-fit: cover;\n}\n.participant-thumb:first-child {\n  margin-left: 0;\n}\n.more-count {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f8f9fa;\n  border: 2px solid white;\n  margin-left: -8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #0B6EFF;\n}\n.participant-count {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.room-meta {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n.room-meta .icon {\n  margin-right: 0.25rem;\n}\n.join-room-btn {\n  width: 100%;\n  padding: 0.875rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n}\n.join-room-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0a56cc,\n      #084399);\n  box-shadow: 0 6px 20px rgba(11, 110, 255, 0.5);\n  transform: translateY(-2px);\n}\n.join-room-btn:disabled {\n  background: rgba(255, 255, 255, 0.1);\n  color: #718096;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.create-room-btn {\n  padding: 0.875rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.4);\n}\n.create-room-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0a56cc,\n      #084399);\n  box-shadow: 0 6px 20px rgba(11, 110, 255, 0.6);\n  transform: translateY(-2px);\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-icon {\n  font-size: 5rem;\n  display: block;\n  margin-bottom: 1.5rem;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n}\n.empty-state p {\n  font-size: 1rem;\n  color: #6c757d;\n  margin-bottom: 2rem;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  animation: fadeIn 0.3s ease;\n}\n.modal-content {\n  background: white;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideUp 0.3s ease;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.modal-header h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.close-btn {\n  width: 36px;\n  height: 36px;\n  background: #f8f9fa;\n  border: none;\n  border-radius: 50%;\n  color: #6c757d;\n  font-size: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn:hover {\n  background: #ff3b30;\n  color: white;\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.25rem;\n}\n.form-group label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.5rem;\n}\n.form-input,\n.form-select {\n  width: 100%;\n  padding: 0.875rem;\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  color: #0f1724;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-input:focus,\n.form-select:focus {\n  outline: none;\n  border-color: #0B6EFF;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(11, 110, 255, 0.1);\n}\n.form-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n.btn-secondary,\n.btn-primary {\n  flex: 1;\n  padding: 0.875rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-secondary {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 2px solid #e9ecef;\n}\n.btn-secondary:hover {\n  background: white;\n  color: #0f1724;\n  border-color: #dee2e6;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  color: white;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n  border: none;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0a56cc,\n      #084399);\n  box-shadow: 0 6px 20px rgba(11, 110, 255, 0.5);\n  transform: translateY(-2px);\n}\n.info-section {\n  display: grid;\n  gap: 1.5rem;\n  margin-top: 3rem;\n}\n.info-card {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 2px solid #e9ecef;\n}\n.info-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(11, 110, 255, 0.15);\n  border-color: #0B6EFF;\n}\n.info-icon {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 1.25rem;\n}\n.info-card h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n}\n.info-card p {\n  font-size: 0.875rem;\n  color: #6c757d;\n  line-height: 1.6;\n}\n@media (min-width: 768px) {\n  .page-header h1 {\n    font-size: 2.5rem;\n  }\n  .page-subtitle {\n    font-size: 1.25rem;\n  }\n  .tab-btn {\n    font-size: 1rem;\n    padding: 1rem;\n  }\n  .section-header h2 {\n    font-size: 2rem;\n  }\n  .filter-section {\n    padding: 1.5rem;\n  }\n  .participants {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n  }\n  .call-animation {\n    padding: 0 2rem;\n  }\n  .rooms-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .info-section {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .community-container {\n    padding: 6rem 0 4rem;\n  }\n  .filter-buttons {\n    gap: 0.75rem;\n  }\n  .filter-btn {\n    padding: 1rem;\n  }\n  .active-call {\n    padding: 2rem;\n  }\n  .participant-avatar {\n    width: 90px;\n    height: 90px;\n  }\n  .rooms-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.note {\n  color: var(--brand-primary);\n  font-weight: 600;\n  margin-top: 2rem;\n}\n.room-modal {\n  position: relative;\n  width: 95%;\n  max-width: 1100px;\n  max-height: 85vh;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8f9fa 100%);\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n}\n.room-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.08),\n      rgba(0, 194, 138, 0.08));\n  border-bottom: 2px solid rgba(11, 110, 255, 0.15);\n}\n.room-header-info h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n}\n.room-meta {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.room-level {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.room-level.level-basic {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n}\n.room-level.level-intermediate {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  color: white;\n}\n.room-level.level-advanced {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B35,\n      #e05a2b);\n  color: white;\n}\n.room-duration,\n.room-members {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.room-modal-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n.participants-panel {\n  flex: 0 0 350px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.participants-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n.participants-header h3 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.participant-count {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.participants-list {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n}\n.participant-card {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.875rem;\n  margin-bottom: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.participant-card:hover {\n  background: white;\n  border-color: rgba(11, 110, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.participant-card.current-user {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.1),\n      rgba(0, 194, 138, 0.1));\n  border-color: rgba(11, 110, 255, 0.3);\n}\n.participant-card.creator {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 215, 0, 0.15),\n      rgba(255, 165, 0, 0.15));\n  border-color: rgba(255, 215, 0, 0.4);\n}\n.participant-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.participant-info {\n  flex: 1;\n  min-width: 0;\n}\n.participant-name-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.25rem;\n}\n.participant-name {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.creator-badge {\n  font-size: 0.7rem;\n  padding: 0.125rem 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FFD700,\n      #FFA500);\n  color: white;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.participant-details {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.participant-gender {\n  font-size: 0.875rem;\n}\n.participant-level {\n  font-size: 0.65rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.level-basic {\n  background: #00C28A;\n  color: white;\n}\n.level-intermediate {\n  background: #0B6EFF;\n  color: white;\n}\n.level-advanced {\n  background: #FF6B35;\n  color: white;\n}\n.participant-time {\n  font-size: 0.7rem;\n  color: #6c757d;\n}\n.participant-controls,\n.participant-status {\n  display: flex;\n  gap: 0.5rem;\n}\n.control-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  background: white;\n  color: #6c757d;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.control-btn:hover {\n  background: #f8f9fa;\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  transform: scale(1.05);\n}\n.control-btn.muted {\n  background: #ff3b30;\n  color: white;\n  border-color: #ff3b30;\n}\n.self-mute-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border: none;\n}\n.self-mute-btn.muted {\n  background: #ff3b30;\n}\n.muted-indicator {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n.muted-text {\n  font-size: 0.65rem;\n  color: #ff3b30;\n  font-weight: 600;\n  background: rgba(255, 59, 48, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.creator-controls {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 2px solid #f8f9fa;\n}\n.creator-control-btn {\n  width: 100%;\n  padding: 0.875rem;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.creator-control-btn:hover {\n  background: #f8f9fa;\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n}\n.creator-control-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #ff3b30,\n      #e03228);\n  color: white;\n  border: none;\n  box-shadow: 0 4px 15px rgba(255, 59, 48, 0.3);\n}\n.chat-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.chat-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f8f9fa;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.chat-header h3 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.chat-status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.disabled-badge,\n.muted-badge {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.disabled-badge {\n  background: rgba(255, 59, 48, 0.1);\n  color: #ff3b30;\n}\n.muted-badge {\n  background: rgba(255, 149, 0, 0.1);\n  color: #ff9500;\n}\n.chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.chat-message {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n}\n.chat-message.own-message {\n  flex-direction: row-reverse;\n}\n.message-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\n.message-content {\n  flex: 1;\n  max-width: 70%;\n}\n.chat-message.own-message .message-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.message-header {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 0.25rem;\n}\n.chat-message.own-message .message-header {\n  flex-direction: row-reverse;\n}\n.message-sender {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.message-time {\n  font-size: 0.7rem;\n  color: #adb5bd;\n}\n.message-text {\n  padding: 0.75rem 1rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  color: #0f1724;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.chat-message.own-message .message-text {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.chat-message:not(.own-message) .message-text {\n  border-bottom-left-radius: 4px;\n}\n.chat-input-container {\n  position: relative;\n  margin-top: auto;\n}\n.emoji-picker {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: white;\n  border-radius: 12px;\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0.5rem;\n  max-width: 280px;\n  z-index: 10;\n}\n.emoji-btn {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: #f8f9fa;\n  border-radius: 8px;\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emoji-btn:hover {\n  background: #e9ecef;\n  transform: scale(1.1);\n}\n.chat-input-wrapper {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.emoji-toggle-btn {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #e9ecef;\n  background: white;\n  border-radius: 10px;\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.emoji-toggle-btn:hover:not(:disabled) {\n  background: #f8f9fa;\n  border-color: #0B6EFF;\n}\n.emoji-toggle-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.chat-input {\n  flex: 1;\n  padding: 0.875rem 1rem;\n  background: #f8f9fa;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  color: #0f1724;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.chat-input:focus {\n  outline: none;\n  border-color: #0B6EFF;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(11, 110, 255, 0.1);\n}\n.chat-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.send-btn {\n  padding: 0.875rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.send-btn:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.4);\n  transform: translateY(-2px);\n}\n.send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .room-modal {\n    width: 98%;\n    max-height: 90vh;\n  }\n  .room-modal-body {\n    flex-direction: column;\n    overflow-y: auto;\n  }\n  .participants-panel {\n    flex: 0 0 auto;\n    max-height: 300px;\n  }\n  .chat-panel {\n    flex: 1;\n    min-height: 400px;\n  }\n  .room-header-info h2 {\n    font-size: 1.125rem;\n  }\n  .room-meta {\n    gap: 0.5rem;\n  }\n  .participant-avatar {\n    width: 40px;\n    height: 40px;\n  }\n  .message-content {\n    max-width: 85%;\n  }\n  .emoji-picker {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .room-modal-header {\n    padding: 1rem;\n  }\n  .room-modal-body {\n    padding: 1rem;\n    gap: 1rem;\n  }\n  .participants-panel,\n  .chat-panel {\n    padding: 1rem;\n  }\n  .participant-card {\n    padding: 0.625rem;\n  }\n  .chat-input-wrapper {\n    gap: 0.5rem;\n  }\n  .send-btn {\n    padding: 0.875rem 1rem;\n  }\n}\n/*# sourceMappingURL=community-page.component.css.map */\n";
  }
});

// src/app/features/community/community-page.component.ts
var CommunityPageComponent;
var init_community_page_component3 = __esm({
  "src/app/features/community/community-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_community_page_component();
    init_community_page_component2();
    init_core();
    init_router();
    init_wallet_service();
    init_toast_service();
    CommunityPageComponent = class CommunityPageComponent2 {
      walletService;
      router;
      toastService;
      // Tab Management
      activeTab = "1on1";
      // Live Members
      liveMembers = 12247;
      baseMemberCounts = {
        "any-basic": 3600,
        "any-intermediate": 5850,
        "any-advanced": 2800,
        "male-basic": 1600,
        "male-intermediate": 2650,
        "male-advanced": 1250,
        "female-basic": 2e3,
        "female-intermediate": 3200,
        "female-advanced": 1550
      };
      // Filters
      genderFilter = "any";
      levelFilter = "intermediate";
      // Call State
      isInCall = false;
      callState = "connecting";
      callDuration = signal(0);
      englishMinutes = signal(0);
      creditsEarned = signal(0);
      isMuted = false;
      myVoiceActive = signal(false);
      partnerVoiceActive = signal(false);
      // Group Discussion Modal State
      isRoomModalOpen = signal(false);
      selectedRoom = signal(null);
      roomParticipants = signal([]);
      chatMessages = signal([]);
      newMessage = signal("");
      isUserMuted = signal(false);
      isChatDisabled = signal(false);
      showEmojiPicker = signal(false);
      emojis = ["\u{1F60A}", "\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F525}", "\u{1F44F}", "\u{1F4AF}", "\u{1F914}", "\u{1F60D}", "\u{1F64C}", "\u2728"];
      // Timers
      callTimer;
      voiceSimulationTimer;
      connectingTimer;
      // Current User
      currentUser = {
        name: "You",
        avatar: "https://i.pravatar.cc/150?img=33",
        level: "Intermediate"
      };
      // Partner
      partner = {
        id: "",
        name: "",
        avatar: "",
        level: "",
        country: "",
        gender: ""
      };
      // Wallet earning configuration
      CREDITS_PER_MINUTE = 0.19;
      // Based on wallet earning rules: 699 credits for 60 hours (3600 min)
      ENGLISH_DETECTION_RATE = 0.85;
      // 85% of speech is valid English
      goBack() {
        this.router.navigate(["/"]);
      }
      // Mock Partners Pool
      partnersPool = [
        { id: "1", name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=47", level: "Intermediate", country: "\u{1F1EE}\u{1F1F3} India", gender: "female" },
        { id: "2", name: "Arjun Patel", avatar: "https://i.pravatar.cc/150?img=12", level: "Advanced", country: "\u{1F1EE}\u{1F1F3} India", gender: "male" },
        { id: "3", name: "Anjali Reddy", avatar: "https://i.pravatar.cc/150?img=45", level: "Basic", country: "\u{1F1EE}\u{1F1F3} India", gender: "female" },
        { id: "4", name: "Rohan Kumar", avatar: "https://i.pravatar.cc/150?img=13", level: "Intermediate", country: "\u{1F1EE}\u{1F1F3} India", gender: "male" },
        { id: "5", name: "Kavya Singh", avatar: "https://i.pravatar.cc/150?img=44", level: "Advanced", country: "\u{1F1EE}\u{1F1F3} India", gender: "female" },
        { id: "6", name: "Aditya Gupta", avatar: "https://i.pravatar.cc/150?img=14", level: "Basic", country: "\u{1F1EE}\u{1F1F3} India", gender: "male" },
        { id: "7", name: "Sneha Verma", avatar: "https://i.pravatar.cc/150?img=48", level: "Intermediate", country: "\u{1F1EE}\u{1F1F3} India", gender: "female" },
        { id: "8", name: "Vikram Mehta", avatar: "https://i.pravatar.cc/150?img=11", level: "Advanced", country: "\u{1F1EE}\u{1F1F3} India", gender: "male" }
      ];
      // Call History
      callHistory = [
        { id: "1", partnerName: "Neha Kapoor", partnerAvatar: "https://i.pravatar.cc/150?img=49", duration: 15, date: "Today, 2:30 PM", creditsEarned: 45 },
        { id: "2", partnerName: "Rahul Desai", partnerAvatar: "https://i.pravatar.cc/150?img=33", duration: 22, date: "Yesterday, 5:15 PM", creditsEarned: 66 },
        { id: "3", partnerName: "Riya Malhotra", partnerAvatar: "https://i.pravatar.cc/150?img=43", duration: 18, date: "Dec 13, 4:45 PM", creditsEarned: 54 }
      ];
      // Group Discussion Rooms
      activeRooms = [
        {
          id: "1",
          topic: "Travel Experiences & Adventures",
          level: "intermediate",
          maxParticipants: 6,
          participants: [
            { name: "Pooja", avatar: "https://i.pravatar.cc/150?img=41" },
            { name: "Karan", avatar: "https://i.pravatar.cc/150?img=52" },
            { name: "Divya", avatar: "https://i.pravatar.cc/150?img=42" }
          ],
          duration: 12,
          hostName: "Pooja S."
        },
        {
          id: "2",
          topic: "Business English & Networking",
          level: "advanced",
          maxParticipants: 5,
          participants: [
            { name: "Amit", avatar: "https://i.pravatar.cc/150?img=60" },
            { name: "Simran", avatar: "https://i.pravatar.cc/150?img=46" }
          ],
          duration: 8,
          hostName: "Amit K."
        },
        {
          id: "3",
          topic: "Daily Life & Casual Chat",
          level: "basic",
          maxParticipants: 8,
          participants: [
            { name: "Harish", avatar: "https://i.pravatar.cc/150?img=59" },
            { name: "Meera", avatar: "https://i.pravatar.cc/150?img=38" },
            { name: "Sanjay", avatar: "https://i.pravatar.cc/150?img=58" },
            { name: "Ananya", avatar: "https://i.pravatar.cc/150?img=40" }
          ],
          duration: 22,
          hostName: "Harish M."
        },
        {
          id: "4",
          topic: "Politics & Current Affairs",
          level: "intermediate",
          maxParticipants: 5,
          participants: [
            { name: "You", avatar: "https://i.pravatar.cc/150?img=33" },
            { name: "Rajesh", avatar: "https://i.pravatar.cc/150?img=57" },
            { name: "Priya", avatar: "https://i.pravatar.cc/150?img=44" }
          ],
          duration: 2,
          hostName: "You"
        }
      ];
      // Create Room Modal
      showCreateRoomModal = false;
      newRoom = {
        topic: "",
        level: "intermediate",
        maxParticipants: 5
      };
      constructor(walletService, router, toastService) {
        this.walletService = walletService;
        this.router = router;
        this.toastService = toastService;
      }
      ngOnInit() {
        if (typeof window !== "undefined") {
          const urlParams = new URLSearchParams(window.location.search);
          const tab = urlParams.get("tab");
          if (tab === "group") {
            this.activeTab = "group";
          }
        }
        this.updateLiveMemberCount();
        setInterval(() => {
          this.updateLiveMemberCount();
        }, 8e3);
        setInterval(() => {
          this.activeRooms.forEach((room) => {
            room.duration++;
          });
        }, 6e4);
      }
      updateLiveMemberCount() {
        const filterKey = `${this.genderFilter}-${this.levelFilter}`;
        const baseCount = this.baseMemberCounts[filterKey];
        const fluctuation = Math.floor(baseCount * 0.05 * (Math.random() * 2 - 1));
        this.liveMembers = baseCount + fluctuation;
      }
      ngOnDestroy() {
        this.clearTimers();
      }
      // 1:1 Call Functions
      startCall() {
        this.clearTimers();
        this.isInCall = true;
        this.callState = "connecting";
        this.callDuration.set(0);
        this.englishMinutes.set(0);
        this.creditsEarned.set(0);
        this.myVoiceActive.set(false);
        this.partnerVoiceActive.set(false);
        this.partner = this.findMatchingPartner();
        this.callState = "connected";
        this.startCallTimer();
        this.startVoiceSimulation();
      }
      findMatchingPartner() {
        let filteredPartners = this.partnersPool.filter((p) => {
          const genderMatch = this.genderFilter === "any" || p.gender === this.genderFilter;
          const levelMatch = p.level.toLowerCase() === this.levelFilter;
          return genderMatch && levelMatch;
        });
        if (filteredPartners.length === 0) {
          filteredPartners = this.partnersPool;
        }
        return filteredPartners[Math.floor(Math.random() * filteredPartners.length)];
      }
      startCallTimer() {
        this.callTimer = setInterval(() => {
          const newDuration = this.callDuration() + 1;
          this.callDuration.set(newDuration);
          const actualMinutesPassed = Math.floor(newDuration / 60);
          if (actualMinutesPassed >= 1) {
            if (newDuration % 10 === 0 || newDuration % 15 === 0) {
              const currentEnglishMinutes = this.englishMinutes();
              const targetEnglishMinutes = Math.floor(actualMinutesPassed * this.ENGLISH_DETECTION_RATE);
              if (currentEnglishMinutes < targetEnglishMinutes) {
                const newEnglishMinutes = currentEnglishMinutes + 1;
                this.englishMinutes.set(newEnglishMinutes);
                this.creditsEarned.set(Math.round(newEnglishMinutes * this.CREDITS_PER_MINUTE * 100) / 100);
              }
            }
            if (newDuration % 60 === 0) {
              const expectedMinutes = Math.floor(actualMinutesPassed * this.ENGLISH_DETECTION_RATE);
              if (this.englishMinutes() < expectedMinutes) {
                this.englishMinutes.set(expectedMinutes);
                this.creditsEarned.set(Math.round(expectedMinutes * this.CREDITS_PER_MINUTE * 100) / 100);
              }
            }
          }
        }, 1e3);
      }
      startVoiceSimulation() {
        this.voiceSimulationTimer = setInterval(() => {
          if (Math.random() > 0.5) {
            this.myVoiceActive.set(!this.myVoiceActive());
          }
          if (Math.random() > 0.5) {
            this.partnerVoiceActive.set(!this.partnerVoiceActive());
          }
        }, 800);
      }
      endCall() {
        const earnedCredits = this.creditsEarned();
        const englishMins = this.englishMinutes();
        const duration = this.callDuration();
        if (earnedCredits > 0) {
          this.walletService.addFunds(earnedCredits, `Speaking practice with ${this.partner.name} - ${englishMins} min English`).subscribe();
        }
        const newHistoryItem = {
          id: Date.now().toString(),
          partnerName: this.partner.name,
          partnerAvatar: this.partner.avatar,
          duration: Math.floor(duration / 60),
          date: "Just now",
          creditsEarned: earnedCredits
        };
        this.callHistory.unshift(newHistoryItem);
        this.clearTimers();
        this.isInCall = false;
        this.callState = "connecting";
        this.myVoiceActive.set(false);
        this.partnerVoiceActive.set(false);
        console.log(`Call ended. Earned ${earnedCredits} credits!`);
      }
      toggleMute() {
        this.isMuted = !this.isMuted;
      }
      reportIssue() {
        this.toastService.success("Report submitted. Our team will review this call for quality assurance.");
      }
      formatTime(seconds) {
        const sec = typeof seconds === "function" ? seconds() : seconds;
        const mins = Math.floor(sec / 60);
        const secs = sec % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      }
      clearTimers() {
        if (this.callTimer)
          clearInterval(this.callTimer);
        if (this.voiceSimulationTimer)
          clearInterval(this.voiceSimulationTimer);
        if (this.connectingTimer)
          clearTimeout(this.connectingTimer);
      }
      // Group Discussion Functions
      openCreateRoomModal() {
        this.showCreateRoomModal = true;
        this.newRoom = {
          topic: "",
          level: "intermediate",
          maxParticipants: 5
        };
      }
      closeCreateRoomModal() {
        this.showCreateRoomModal = false;
      }
      createRoom() {
        if (!this.newRoom.topic.trim()) {
          this.toastService.warning("Please enter a room topic");
          return;
        }
        const room = {
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
        this.openRoomModal(room);
      }
      joinRoom(roomId) {
        const room = this.activeRooms.find((r) => r.id === roomId);
        if (room) {
          this.openRoomModal(room);
        }
      }
      // Group Discussion Modal Methods
      openRoomModal(room) {
        this.selectedRoom.set(room);
        this.generateRoomParticipants(room);
        this.generateInitialChatMessages(room);
        this.isRoomModalOpen.set(true);
        this.isUserMuted.set(false);
        this.isChatDisabled.set(false);
      }
      closeRoomModal() {
        this.isRoomModalOpen.set(false);
        this.selectedRoom.set(null);
        this.roomParticipants.set([]);
        this.chatMessages.set([]);
        this.newMessage.set("");
        this.showEmojiPicker.set(false);
      }
      generateRoomParticipants(room) {
        const indianNames = {
          male: ["Arjun", "Rohan", "Vikram", "Aditya", "Karan", "Amit", "Harish", "Sanjay", "Raj", "Dev"],
          female: ["Priya", "Anjali", "Kavya", "Sneha", "Pooja", "Divya", "Simran", "Meera", "Riya", "Neha"]
        };
        const maleAvatars = [12, 13, 14, 11, 15, 16, 52, 58, 59, 60];
        const femaleAvatars = [47, 45, 44, 48, 49, 50, 38, 40, 41, 42, 43, 46];
        const levels = ["basic", "intermediate", "advanced"];
        const currentCount = room.participants.length + 1;
        const participants = [];
        participants.push({
          id: "current-user",
          name: "You",
          gender: "male",
          level: this.levelFilter,
          avatar: this.currentUser.avatar,
          joinedAgo: 0,
          isCreator: false,
          isMuted: false,
          isCurrentUser: true
        });
        room.participants.forEach((p, index) => {
          const gender = Math.random() > 0.5 ? "male" : "female";
          const joinedMinutesAgo = Math.floor(Math.random() * room.duration);
          participants.push({
            id: `participant-${index}`,
            name: p.name,
            gender,
            level: room.level,
            avatar: p.avatar,
            joinedAgo: joinedMinutesAgo,
            isCreator: index === 0,
            // First participant is creator
            isMuted: false,
            isCurrentUser: false
          });
        });
        this.roomParticipants.set(participants);
      }
      generateInitialChatMessages(room) {
        const participants = this.roomParticipants();
        const messages = [];
        if (participants.length > 1) {
          const creator = participants.find((p) => p.isCreator);
          if (creator) {
            messages.push({
              id: `msg-${Date.now()}-1`,
              sender: creator.name,
              text: `Welcome to ${room.topic}! Let's have a great discussion \u{1F60A}`,
              timestamp: new Date(Date.now() - 5 * 6e4),
              avatar: creator.avatar,
              isCurrentUser: false
            });
          }
          const sampleMessages = [
            "Hi everyone! Excited to be here",
            "This topic is really interesting \u{1F44D}",
            "Looking forward to practicing my English",
            "Anyone wants to share their thoughts?",
            "Great discussion so far!",
            "I learned a lot today \u{1F4AF}"
          ];
          for (let i = 0; i < Math.min(4, participants.length - 1); i++) {
            const randomParticipant = participants[1 + i % (participants.length - 1)];
            messages.push({
              id: `msg-${Date.now()}-${i + 2}`,
              sender: randomParticipant.name,
              text: sampleMessages[i % sampleMessages.length],
              timestamp: new Date(Date.now() - (4 - i) * 6e4),
              avatar: randomParticipant.avatar,
              isCurrentUser: false
            });
          }
        }
        this.chatMessages.set(messages);
      }
      sendMessage() {
        const message = this.newMessage().trim();
        if (!message || this.isChatDisabled() || this.isUserMuted())
          return;
        const currentUser = this.roomParticipants().find((p) => p.isCurrentUser);
        const newMsg = {
          id: `msg-${Date.now()}`,
          sender: "You",
          text: message,
          timestamp: /* @__PURE__ */ new Date(),
          avatar: currentUser?.avatar || this.currentUser.avatar,
          isCurrentUser: true
        };
        this.chatMessages.update((msgs) => [...msgs, newMsg]);
        this.newMessage.set("");
        this.showEmojiPicker.set(false);
        setTimeout(() => this.simulateResponse(), 2e3 + Math.random() * 3e3);
      }
      sendEmoji(emoji) {
        if (this.isChatDisabled() || this.isUserMuted())
          return;
        const currentUser = this.roomParticipants().find((p) => p.isCurrentUser);
        const newMsg = {
          id: `msg-${Date.now()}`,
          sender: "You",
          text: emoji,
          timestamp: /* @__PURE__ */ new Date(),
          avatar: currentUser?.avatar || this.currentUser.avatar,
          isCurrentUser: true
        };
        this.chatMessages.update((msgs) => [...msgs, newMsg]);
        this.showEmojiPicker.set(false);
      }
      simulateResponse() {
        if (!this.isRoomModalOpen())
          return;
        const participants = this.roomParticipants().filter((p) => !p.isCurrentUser && !p.isMuted);
        if (participants.length === 0)
          return;
        const randomParticipant = participants[Math.floor(Math.random() * participants.length)];
        const responses = [
          "That's a great point!",
          "I totally agree \u{1F44D}",
          "Interesting perspective",
          "Can you explain more?",
          "Thanks for sharing!",
          "Yes, absolutely! \u{1F4AF}",
          "I have a different view on this",
          "Let me add to that...",
          "Very well said! \u{1F44F}",
          "That makes sense \u{1F914}"
        ];
        const newMsg = {
          id: `msg-${Date.now()}`,
          sender: randomParticipant.name,
          text: responses[Math.floor(Math.random() * responses.length)],
          timestamp: /* @__PURE__ */ new Date(),
          avatar: randomParticipant.avatar,
          isCurrentUser: false
        };
        this.chatMessages.update((msgs) => [...msgs, newMsg]);
      }
      toggleMuteParticipant(participant) {
        const currentUser = this.roomParticipants().find((p) => p.isCurrentUser);
        if (!currentUser?.isCreator)
          return;
        if (participant.isCurrentUser)
          return;
        this.roomParticipants.update((participants) => participants.map((p) => p.id === participant.id ? __spreadProps(__spreadValues({}, p), { isMuted: !p.isMuted }) : p));
      }
      toggleChatForAll() {
        const currentUser = this.roomParticipants().find((p) => p.isCurrentUser);
        if (!currentUser?.isCreator)
          return;
        this.isChatDisabled.update((disabled) => !disabled);
      }
      toggleSelfMute() {
        this.isUserMuted.update((muted) => !muted);
      }
      toggleEmojiPicker() {
        this.showEmojiPicker.update((show) => !show);
      }
      getTimeAgoText(minutes) {
        if (minutes === 0)
          return "Just joined";
        if (minutes === 1)
          return "1 min ago";
        if (minutes < 60)
          return `${minutes} min ago`;
        const hours = Math.floor(minutes / 60);
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
      }
      getLevelBadgeClass(level) {
        return `level-${level.toLowerCase()}`;
      }
      getGenderIcon(gender) {
        return gender === "male" ? "\u{1F468}" : "\u{1F469}";
      }
      formatTimestamp(date) {
        const now = /* @__PURE__ */ new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 6e4);
        if (diffMins < 1)
          return "Just now";
        if (diffMins === 1)
          return "1 min ago";
        if (diffMins < 60)
          return `${diffMins} min ago`;
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${displayHours}:${displayMinutes} ${ampm}`;
      }
      isCurrentUserCreator() {
        return !!this.roomParticipants().find((p) => p.isCurrentUser)?.isCreator;
      }
      static ctorParameters = () => [
        { type: WalletService },
        { type: Router },
        { type: ToastService }
      ];
    };
    CommunityPageComponent = __decorate([
      Component({
        selector: "app-community-page",
        standalone: false,
        template: community_page_component_default,
        styles: [community_page_component_default2]
      })
    ], CommunityPageComponent);
  }
});

// src/app/features/community/community-page.component.spec.ts
var require_community_page_component_spec = __commonJS({
  "src/app/features/community/community-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_community_page_component3();
    describe("CommunityPageComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CommunityPageComponent],
          providers: [
            provideZonelessChangeDetection()
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(CommunityPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_community_page_component_spec();
//# sourceMappingURL=spec-app-features-community-community-page.component.spec.js.map
