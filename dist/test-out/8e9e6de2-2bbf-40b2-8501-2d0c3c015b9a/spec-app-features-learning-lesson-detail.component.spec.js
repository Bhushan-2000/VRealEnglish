import {
  ToastService,
  init_toast_service
} from "./chunk-U4UBZW3U.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  init_platform_browser,
  init_router
} from "./chunk-VTEW27YV.js";
import "./chunk-2NDX233R.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  provideZonelessChangeDetection,
  signal
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/learning/lesson-detail.component.html
var lesson_detail_component_default;
var init_lesson_detail_component = __esm({
  "angular:jit:template:src/app/features/learning/lesson-detail.component.html"() {
    lesson_detail_component_default = `<div class="lesson-detail-container" *ngIf="lessonData">
  <!-- Header -->
  <div class="lesson-header">
    <button class="back-btn" (click)="goBack()">
      <span class="back-icon">\u2190</span> Back to Lessons
    </button>
    <div class="lesson-title-section">
      <h1>{{ lessonData.title }}</h1>
      <div class="lesson-meta">
        <span class="meta-badge level-{{ lessonData.level }}">{{ lessonData.level }}</span>
        <span class="meta-badge category">{{ lessonData.category }}</span>
        <span class="progress-badge">{{ getProgressPercentage() }}% Complete</span>
      </div>
    </div>
    <div class="action-buttons">
      <button class="action-btn ai-coach-btn" (click)="toggleAIPanel()" title="AI Coach Feedback">
        \u{1F916} AI Coach
      </button>
      <button class="action-btn mentor-btn" (click)="toggleMentorPanel()" title="Book Live Mentor">
        \u{1F468}\u200D\u{1F3EB} Live Mentor
      </button>
      <button class="action-btn" (click)="downloadTranscript()" title="Download Transcript">
        \u{1F4E5} Download
      </button>
      <div class="speed-control">
        <label>Speed:</label>
        <button 
          class="speed-btn"
          [class.active]="playbackSpeed() === 0.75"
          (click)="setPlaybackSpeed(0.75)">
          0.75x
        </button>
        <button 
          class="speed-btn"
          [class.active]="playbackSpeed() === 1"
          (click)="setPlaybackSpeed(1)">
          1x
        </button>
        <button 
          class="speed-btn"
          [class.active]="playbackSpeed() === 1.25"
          (click)="setPlaybackSpeed(1.25)">
          1.25x
        </button>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="lesson-content">
    <!-- Left Panel: Video -->
    <div class="video-panel">
      <div class="video-container">
        <!-- YouTube Video -->
        <iframe 
          *ngIf="videoUrl && lessonData && !lessonData.videoId.includes('local')"
          [src]="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        
        <!-- Local Video -->
        <video 
          *ngIf="videoUrl && lessonData && lessonData.videoId.includes('local')"
          [src]="videoUrl"
          controls
          class="local-video">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <!-- Video Controls Info -->
      <div class="video-info">
        <div class="info-tip">
          <span class="tip-icon">\u{1F4A1}</span>
          <p>Watch the video and follow along with the interactive transcript below. Click play buttons to hear pronunciation!</p>
        </div>
      </div>
    </div>

    <!-- Right Panel: Tabs -->
    <div class="interactive-panel">
      <!-- Tab Navigation -->
      <div class="tab-navigation">
        <button 
          class="tab-btn"
          [class.active]="currentTab() === 'transcript'"
          (click)="switchTab('transcript')">
          <span class="tab-icon">\u{1F4AC}</span>
          Transcript
        </button>
        <button 
          class="tab-btn"
          [class.active]="currentTab() === 'vocabulary'"
          (click)="switchTab('vocabulary')">
          <span class="tab-icon">\u{1F4DA}</span>
          Vocabulary
        </button>
        <button 
          class="tab-btn"
          [class.active]="currentTab() === 'grammar'"
          (click)="switchTab('grammar')">
          <span class="tab-icon">\u270F\uFE0F</span>
          Grammar
        </button>
      </div>

      <!-- Transcript Tab -->
      <div class="tab-content" *ngIf="currentTab() === 'transcript'">
        <div class="transcript-header">
          <h3>Interactive Dialogue</h3>
          <p class="subtitle">Click \u25B6 to hear each line, \u{1F3A4} to practice speaking</p>
        </div>
        
        <div class="dialogue-list">
          <div 
            *ngFor="let line of lessonData.dialogue"
            class="dialogue-line"
            [class.active]="currentLineId() === line.id"
            [class.completed]="completedLines().has(line.id)"
            [class.bookmarked]="bookmarkedLines().has(line.id)">
            
            <div class="line-header">
              <div class="speaker-info">
                <span class="speaker-avatar">{{ line.speaker.charAt(0) }}</span>
                <span class="speaker-name">{{ line.speaker }}</span>
              </div>
              <div class="line-actions">
                <button 
                  class="action-icon-btn bookmark-btn"
                  [class.active]="bookmarkedLines().has(line.id)"
                  (click)="toggleBookmark(line.id)"
                  title="Bookmark">
                  {{ bookmarkedLines().has(line.id) ? '\u2B50' : '\u2606' }}
                </button>
                <button 
                  class="action-icon-btn play-btn"
                  (click)="playLine(line)"
                  [disabled]="currentLineId() === line.id"
                  title="Play audio">
                  \u25B6
                </button>
                <button 
                  class="action-icon-btn record-btn"
                  [class.recording]="isRecording()"
                  (click)="startRecording(line)"
                  title="Practice pronunciation">
                  \u{1F3A4}
                </button>
              </div>
            </div>
            
            <div class="line-content">
              <p class="line-text">{{ line.text }}</p>
              <span class="timestamp">{{ line.timestamp }}s</span>
            </div>
            
            <!-- Pronunciation Feedback -->
            <div class="pronunciation-feedback" *ngIf="recognizedText() && currentLineId() === line.id">
              <div class="feedback-header">
                <span class="feedback-label">You said:</span>
                <span class="score" [class]="pronunciationScore()! >= 70 ? 'good' : 'needs-work'">
                  Score: {{ pronunciationScore() }}%
                </span>
              </div>
              <p class="recognized-text">{{ recognizedText() }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vocabulary Tab -->
      <div class="tab-content" *ngIf="currentTab() === 'vocabulary'">
        <div class="vocabulary-header">
          <h3>Key Vocabulary</h3>
          <p class="subtitle">{{ lessonData.vocabulary.length }} important words and phrases</p>
        </div>
        
        <div class="vocabulary-list">
          <div 
            *ngFor="let item of lessonData.vocabulary"
            class="vocabulary-card">
            <div class="vocab-header">
              <h4 class="vocab-word">{{ item.word }}</h4>
              <button 
                class="action-icon-btn play-btn"
                (click)="playVocabulary(item)"
                title="Hear pronunciation">
                \u{1F50A}
              </button>
            </div>
            <p class="vocab-meaning">
              <span class="label">Meaning:</span> {{ item.meaning }}
            </p>
            <p class="vocab-example">
              <span class="label">Example:</span> <em>"{{ item.example }}"</em>
            </p>
          </div>
        </div>
      </div>

      <!-- Grammar Tab -->
      <div class="tab-content" *ngIf="currentTab() === 'grammar'">
        <div class="grammar-header">
          <h3>Grammar Points</h3>
          <p class="subtitle">{{ lessonData.grammar.length }} key grammar structures used in this lesson</p>
        </div>
        
        <div class="grammar-list">
          <div 
            *ngFor="let point of lessonData.grammar; let i = index"
            class="grammar-card">
            <div class="grammar-number">{{ i + 1 }}</div>
            <h4 class="grammar-title">{{ point.title }}</h4>
            <p class="grammar-explanation">{{ point.explanation }}</p>
            <div class="grammar-examples">
              <span class="examples-label">Examples:</span>
              <ul>
                <li *ngFor="let example of point.examples">{{ example }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="progress-section">
    <div class="progress-info">
      <span class="progress-label">Your Progress</span>
      <span class="progress-text">{{ completedLines().size }} / {{ lessonData.dialogue.length }} lines completed</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" [style.width.%]="getProgressPercentage()"></div>
    </div>
  </div>

  <!-- AI Coach Panel (Slide-in) -->
  <div class="side-panel ai-coach-panel" [class.open]="showAIPanel()">
    <div class="panel-header">
      <h3>\u{1F916} AI Coach Feedback</h3>
      <button class="close-btn" (click)="closeAIPanel()">\u2715</button>
    </div>
    
    <div class="panel-content" *ngIf="aiFeedback()">
      <!-- Overall Score -->
      <div class="overall-score-card">
        <div class="score-circle" [class.excellent]="aiFeedback()!.overallScore >= 85" 
             [class.good]="aiFeedback()!.overallScore >= 70 && aiFeedback()!.overallScore < 85"
             [class.needs-work]="aiFeedback()!.overallScore < 70">
          <span class="score-number">{{ aiFeedback()!.overallScore }}</span>
          <span class="score-suffix">%</span>
        </div>
        <p class="overall-feedback">
          <ng-container *ngIf="aiFeedback()!.overallScore >= 85">Excellent work! Keep it up!</ng-container>
          <ng-container *ngIf="aiFeedback()!.overallScore >= 70 && aiFeedback()!.overallScore < 85">Good job! With more practice, you'll be perfect!</ng-container>
          <ng-container *ngIf="aiFeedback()!.overallScore < 70">Keep practicing! You're improving!</ng-container>
        </p>
      </div>

      <!-- Detailed Feedback Sections -->
      <div class="feedback-sections">
        <!-- Pronunciation -->
        <div class="feedback-card">
          <div class="feedback-card-header">
            <h4>\u{1F5E3}\uFE0F Pronunciation</h4>
            <span class="score-badge" [class.good]="aiFeedback()!.pronunciation.score >= 70">
              {{ aiFeedback()!.pronunciation.score }}%
            </span>
          </div>
          <div class="feedback-content">
            <div class="errors-section" *ngIf="aiFeedback()!.pronunciation.errors.length > 0">
              <p class="section-label">Errors Detected:</p>
              <ul>
                <li *ngFor="let error of aiFeedback()!.pronunciation.errors">{{ error }}</li>
              </ul>
            </div>
            <div class="suggestions-section">
              <p class="section-label">\u{1F4A1} Suggestions:</p>
              <ul>
                <li *ngFor="let suggestion of aiFeedback()!.pronunciation.suggestions">{{ suggestion }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Grammar -->
        <div class="feedback-card">
          <div class="feedback-card-header">
            <h4>\u270F\uFE0F Grammar</h4>
            <span class="score-badge" [class.good]="aiFeedback()!.grammar.score >= 70">
              {{ aiFeedback()!.grammar.score }}%
            </span>
          </div>
          <div class="feedback-content">
            <div class="errors-section">
              <p class="section-label">Analysis:</p>
              <ul>
                <li *ngFor="let error of aiFeedback()!.grammar.errors">{{ error }}</li>
              </ul>
            </div>
            <div class="corrections-section" *ngIf="aiFeedback()!.grammar.corrections.length > 0">
              <p class="section-label">\u{1F4A1} Tips:</p>
              <ul>
                <li *ngFor="let correction of aiFeedback()!.grammar.corrections">{{ correction }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Fluency -->
        <div class="feedback-card">
          <div class="feedback-card-header">
            <h4>\u{1F3AF} Fluency</h4>
            <span class="score-badge" [class.good]="aiFeedback()!.fluency.score >= 70">
              {{ aiFeedback()!.fluency.score }}%
            </span>
          </div>
          <div class="feedback-content">
            <p>{{ aiFeedback()!.fluency.feedback }}</p>
          </div>
        </div>

        <!-- Accent -->
        <div class="feedback-card">
          <div class="feedback-card-header">
            <h4>\u{1F3A4} Accent & Intonation</h4>
            <span class="score-badge" [class.good]="aiFeedback()!.accent.score >= 70">
              {{ aiFeedback()!.accent.score }}%
            </span>
          </div>
          <div class="feedback-content">
            <p class="section-label">\u{1F4A1} Tips to improve:</p>
            <ul>
              <li *ngFor="let tip of aiFeedback()!.accent.tips">{{ tip }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Practice History -->
      <div class="practice-history" *ngIf="practiceHistory().length > 0">
        <h4>\u{1F4CA} Practice History</h4>
        <div class="history-list">
          <div class="history-item" *ngFor="let practice of practiceHistory().slice(-5)">
            <span class="practice-time">{{ practice.timestamp | date: 'short' }}</span>
            <span class="practice-score" [class.good]="practice.score >= 70">{{ practice.score }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-content analyzing" *ngIf="isAnalyzing()">
      <div class="analyzing-animation">
        <div class="spinner"></div>
        <p>AI is analyzing your speech...</p>
      </div>
    </div>

    <div class="panel-content empty" *ngIf="!aiFeedback() && !isAnalyzing()">
      <div class="empty-state">
        <span class="empty-icon">\u{1F3A4}</span>
        <h4>Practice to Get Feedback</h4>
        <p>Click the \u{1F3A4} button next to any dialogue line to practice pronunciation and get AI-powered feedback!</p>
      </div>
    </div>
  </div>

  <!-- Live Mentor Panel (Slide-in) -->
  <div class="side-panel mentor-panel" [class.open]="showMentorPanel()">
    <div class="panel-header">
      <h3>\u{1F468}\u200D\u{1F3EB} Live Mentor Sessions</h3>
      <button class="close-btn" (click)="closeMentorPanel()">\u2715</button>
    </div>
    
    <div class="panel-content">
      <div class="mentor-intro">
        <p>Book a live session with expert mentors to discuss this video lesson:</p>
        <ul class="mentor-benefits">
          <li>\u{1F4D6} Detailed context explanation of scenes</li>
          <li>\u{1F524} Word-by-word breakdown and usage</li>
          <li>\u270F\uFE0F Grammar and sentence structure analysis</li>
          <li>\u2753 Get your doubts resolved instantly</li>
          <li>\u{1F3AF} Real-life application tips</li>
        </ul>
      </div>

      <!-- Available Sessions -->
      <div class="mentor-sessions-list">
        <h4>Available Sessions for "{{ lessonData.title }}"</h4>
        
        <div class="mentor-card" *ngFor="let session of mentorSessions()">
          <div class="mentor-profile">
            <img [src]="session.mentorPhoto" [alt]="session.mentorName" class="mentor-avatar">
            <div class="mentor-info">
              <h5>{{ session.mentorName }}</h5>
              <div class="mentor-rating">
                <span class="stars">\u2B50 {{ session.rating }}</span>
                <span class="review-count">(250+ reviews)</span>
              </div>
            </div>
          </div>

          <div class="session-details">
            <div class="detail-row">
              <span class="detail-icon">\u{1F4C5}</span>
              <span>{{ session.date | date: 'fullDate' }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-icon">\u{1F550}</span>
              <span>{{ session.time }} ({{ session.duration }})</span>
            </div>
            <div class="detail-row">
              <span class="detail-icon">\u{1F465}</span>
              <span>{{ session.availableSlots }} spots left</span>
            </div>
            <div class="detail-row">
              <span class="detail-icon">\u{1F4B0}</span>
              <span class="price">\u20B9{{ session.price }}</span>
            </div>
          </div>

          <div class="session-topics">
            <p class="topics-label">Topics Covered:</p>
            <div class="topics-tags">
              <span class="topic-tag" *ngFor="let topic of session.topics">{{ topic }}</span>
            </div>
          </div>

          <button class="book-btn" (click)="bookMentorSession(session)">
            Book Session \u2192
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Loading State -->
<div class="loading-state" *ngIf="!lessonData">
  <div class="spinner"></div>
  <p>Loading lesson...</p>
</div>
`;
  }
});

// angular:jit:style:src/app/features/learning/lesson-detail.component.css
var lesson_detail_component_default2;
var init_lesson_detail_component2 = __esm({
  "angular:jit:style:src/app/features/learning/lesson-detail.component.css"() {
    lesson_detail_component_default2 = "/* src/app/features/learning/lesson-detail.component.css */\n.lesson-detail-container {\n  min-height: 100vh;\n  padding: 5rem 0 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n}\n.lesson-header {\n  max-width: 1400px;\n  margin: 0 auto 2rem;\n  padding: 0 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1.5rem;\n}\n.back-btn {\n  padding: 0.75rem 1.25rem;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.back-btn:hover {\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  background: rgba(11, 110, 255, 0.05);\n}\n.back-icon {\n  font-size: 1.25rem;\n}\n.lesson-title-section {\n  flex: 1;\n  min-width: 250px;\n}\n.lesson-title-section h1 {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n}\n.lesson-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.meta-badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.meta-badge.level-beginner {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n}\n.meta-badge.level-intermediate {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  color: white;\n}\n.meta-badge.level-advanced {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B35,\n      #e05a2b);\n  color: white;\n}\n.meta-badge.category {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.progress-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #FFD700,\n      #FFA500);\n  color: white;\n}\n.action-buttons {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.action-btn {\n  padding: 0.75rem 1.25rem;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.action-btn:hover {\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  background: rgba(11, 110, 255, 0.05);\n}\n.speed-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: white;\n  padding: 0.5rem;\n  border-radius: 12px;\n  border: 2px solid #e9ecef;\n}\n.speed-control label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6c757d;\n}\n.speed-btn {\n  padding: 0.5rem 0.875rem;\n  background: transparent;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.speed-btn:hover {\n  background: rgba(11, 110, 255, 0.1);\n  color: #0B6EFF;\n}\n.speed-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n}\n.lesson-content {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 2rem;\n}\n.video-panel {\n  background: white;\n  border-radius: 20px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  border-radius: 16px;\n  background: #000;\n}\n.video-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.local-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  background: #000;\n}\n.video-info {\n  margin-top: 1.5rem;\n}\n.info-tip {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.05),\n      rgba(0, 194, 138, 0.05));\n  border-radius: 12px;\n  border-left: 4px solid #0B6EFF;\n}\n.tip-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.info-tip p {\n  font-size: 0.875rem;\n  color: #6c757d;\n  line-height: 1.6;\n  margin: 0;\n}\n.interactive-panel {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 800px;\n}\n.tab-navigation {\n  display: flex;\n  background: #f8f9fa;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.tab-btn {\n  flex: 1;\n  padding: 0.875rem;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.tab-btn:hover {\n  background: white;\n  color: #0B6EFF;\n}\n.tab-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n}\n.tab-icon {\n  font-size: 1.125rem;\n}\n.tab-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.transcript-header,\n.vocabulary-header,\n.grammar-header {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n.transcript-header h3,\n.vocabulary-header h3,\n.grammar-header h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.25rem;\n}\n.subtitle {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n}\n.dialogue-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.dialogue-line {\n  padding: 1.25rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid transparent;\n  transition: all 0.3s ease;\n}\n.dialogue-line:hover {\n  background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-left-color: #0B6EFF;\n}\n.dialogue-line.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.1),\n      rgba(0, 194, 138, 0.1));\n  border-left-color: #00C28A;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.2);\n}\n.dialogue-line.completed {\n  border-left-color: #00C28A;\n}\n.dialogue-line.bookmarked {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 215, 0, 0.1),\n      rgba(255, 165, 0, 0.1));\n  border-left-color: #FFD700;\n}\n.line-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.speaker-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.speaker-avatar {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n.speaker-name {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0f1724;\n}\n.line-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-icon-btn {\n  width: 32px;\n  height: 32px;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.action-icon-btn:hover {\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  background: rgba(11, 110, 255, 0.05);\n  transform: scale(1.05);\n}\n.action-icon-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.bookmark-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #FFD700,\n      #FFA500);\n  border-color: transparent;\n  color: white;\n}\n.record-btn.recording {\n  background: #ff3b30;\n  border-color: #ff3b30;\n  color: white;\n  animation: pulse 1s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.line-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.line-text {\n  flex: 1;\n  font-size: 0.9375rem;\n  color: #0f1724;\n  line-height: 1.6;\n  margin: 0;\n}\n.timestamp {\n  font-size: 0.75rem;\n  color: #adb5bd;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  background: white;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.pronunciation-feedback {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 10px;\n  border: 2px solid #e9ecef;\n}\n.feedback-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.feedback-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.score {\n  padding: 0.25rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.score.good {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n}\n.score.needs-work {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B35,\n      #e05a2b);\n  color: white;\n}\n.recognized-text {\n  font-size: 0.875rem;\n  color: #0f1724;\n  font-style: italic;\n  margin: 0;\n}\n.vocabulary-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.vocabulary-card {\n  padding: 1.25rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #0B6EFF;\n  transition: all 0.3s ease;\n}\n.vocabulary-card:hover {\n  background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.vocab-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.vocab-word {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0B6EFF;\n  margin: 0;\n}\n.vocab-meaning,\n.vocab-example {\n  font-size: 0.875rem;\n  color: #495057;\n  line-height: 1.6;\n  margin: 0.5rem 0 0 0;\n}\n.label {\n  font-weight: 700;\n  color: #6c757d;\n}\n.vocab-example em {\n  color: #0f1724;\n}\n.grammar-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.grammar-card {\n  position: relative;\n  padding: 1.5rem;\n  padding-left: 4rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.grammar-card:hover {\n  background: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.grammar-number {\n  position: absolute;\n  left: 1.5rem;\n  top: 1.5rem;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.grammar-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n}\n.grammar-explanation {\n  font-size: 0.875rem;\n  color: #6c757d;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.grammar-examples {\n  padding: 1rem;\n  background: white;\n  border-radius: 10px;\n  border-left: 3px solid #00C28A;\n}\n.examples-label {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.75rem;\n}\n.grammar-examples ul {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.grammar-examples li {\n  font-size: 0.875rem;\n  color: #0f1724;\n  line-height: 1.8;\n  margin-bottom: 0.5rem;\n}\n.progress-section {\n  max-width: 1400px;\n  margin: 2rem auto 0;\n  padding: 0 1rem;\n}\n.progress-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.progress-label {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #6c757d;\n}\n.progress-text {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f1724;\n}\n.progress-bar {\n  height: 12px;\n  background: #e9ecef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #0B6EFF,\n      #00C28A);\n  border-radius: 10px;\n  transition: width 0.5s ease;\n}\n.loading-state {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #e9ecef;\n  border-top-color: #0B6EFF;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  font-size: 1rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n@media (max-width: 1024px) {\n  .lesson-content {\n    grid-template-columns: 1fr;\n  }\n  .interactive-panel {\n    max-height: 600px;\n  }\n}\n@media (max-width: 768px) {\n  .lesson-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .action-buttons {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .action-btn,\n  .speed-control {\n    flex: 1;\n  }\n  .lesson-title-section h1 {\n    font-size: 1.5rem;\n  }\n  .speaker-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .lesson-header {\n    padding: 0 0.75rem;\n  }\n  .video-panel,\n  .interactive-panel {\n    padding: 1rem;\n  }\n  .dialogue-line {\n    padding: 1rem;\n  }\n  .line-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .tab-btn {\n    font-size: 0.75rem;\n    padding: 0.75rem 0.5rem;\n  }\n  .tab-icon {\n    font-size: 1rem;\n  }\n}\n.ai-coach-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #6D28D9) !important;\n  color: white !important;\n  border: none !important;\n}\n.ai-coach-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);\n}\n.mentor-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574) !important;\n  color: white !important;\n  border: none !important;\n}\n.mentor-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 194, 138, 0.3);\n}\n.side-panel {\n  position: fixed;\n  top: 0;\n  right: -500px;\n  width: 500px;\n  height: 100vh;\n  background: white;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);\n  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.side-panel.open {\n  right: 0;\n}\n.panel-header {\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.panel-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.panel-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1.5rem;\n}\n.ai-coach-panel .panel-header {\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #6D28D9);\n}\n.overall-score-card {\n  text-align: center;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #ffffff);\n  border-radius: 16px;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.score-circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #e9ecef,\n      #f8f9fa);\n  color: #6c757d;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n.score-circle.excellent {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n  animation: pulse 2s infinite;\n}\n.score-circle.good {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #0a56cc);\n  color: white;\n}\n.score-circle.needs-work {\n  background:\n    linear-gradient(\n      135deg,\n      #FFA500,\n      #FF8C00);\n  color: white;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.score-number {\n  font-size: 3rem;\n}\n.score-suffix {\n  font-size: 1.5rem;\n  margin-left: 0.25rem;\n}\n.overall-feedback {\n  margin: 0;\n  font-size: 1rem;\n  color: #495057;\n  font-weight: 600;\n}\n.feedback-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.feedback-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.feedback-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.feedback-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n.feedback-card-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #212529;\n}\n.score-badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #e9ecef,\n      #dee2e6);\n  color: #6c757d;\n}\n.score-badge.good {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n}\n.feedback-content {\n  font-size: 0.875rem;\n  color: #495057;\n  line-height: 1.6;\n}\n.section-label {\n  font-weight: 700;\n  color: #212529;\n  margin-bottom: 0.5rem;\n}\n.errors-section ul,\n.suggestions-section ul,\n.corrections-section ul {\n  margin: 0.5rem 0 0;\n  padding-left: 1.25rem;\n}\n.errors-section li,\n.suggestions-section li,\n.corrections-section li {\n  margin-bottom: 0.5rem;\n  color: #495057;\n}\n.practice-history {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.practice-history h4 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #212529;\n}\n.history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.history-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: white;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.practice-time {\n  color: #6c757d;\n}\n.practice-score {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  background: #e9ecef;\n  color: #6c757d;\n}\n.practice-score.good {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n}\n.panel-actions {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.primary-btn,\n.secondary-btn {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n}\n.primary-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  color: white;\n}\n.primary-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(11, 110, 255, 0.3);\n}\n.secondary-btn {\n  background: white;\n  color: #0B6EFF;\n  border: 2px solid #0B6EFF;\n}\n.secondary-btn:hover {\n  background: rgba(11, 110, 255, 0.05);\n  transform: translateY(-2px);\n}\n.analyzing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.analyzing-animation {\n  text-align: center;\n}\n.analyzing-animation .spinner {\n  width: 60px;\n  height: 60px;\n  border: 4px solid #f8f9fa;\n  border-top-color: #8B5CF6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n.analyzing-animation p {\n  color: #6c757d;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 2rem;\n}\n.empty-icon {\n  font-size: 4rem;\n  display: block;\n  margin-bottom: 1rem;\n}\n.empty-state h4 {\n  margin: 0 0 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #212529;\n}\n.empty-state p {\n  margin: 0;\n  color: #6c757d;\n  line-height: 1.6;\n}\n.mentor-panel .panel-header {\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n}\n.mentor-intro {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #ffffff);\n  border-radius: 12px;\n}\n.mentor-intro p {\n  margin: 0 0 1rem;\n  color: #495057;\n  font-weight: 600;\n}\n.mentor-benefits {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.mentor-benefits li {\n  margin-bottom: 0.5rem;\n  color: #495057;\n  line-height: 1.6;\n}\n.mentor-sessions-list h4 {\n  margin: 0 0 1rem;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #212529;\n}\n.mentor-card {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.mentor-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  transform: translateY(-4px);\n}\n.mentor-profile {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n.mentor-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #00C28A;\n}\n.mentor-info h5 {\n  margin: 0 0 0.375rem;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #212529;\n}\n.mentor-rating {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.stars {\n  color: #FFD700;\n  font-weight: 700;\n}\n.review-count {\n  color: #6c757d;\n}\n.session-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: #495057;\n}\n.detail-icon {\n  font-size: 1.125rem;\n}\n.price {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #00C28A;\n}\n.session-topics {\n  margin-bottom: 1.25rem;\n}\n.topics-label {\n  margin: 0 0 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #212529;\n}\n.topics-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.topic-tag {\n  padding: 0.375rem 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #e9ecef,\n      #dee2e6);\n  color: #495057;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.book-btn {\n  width: 100%;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #00C28A,\n      #00a574);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.book-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 194, 138, 0.3);\n}\n@media (max-width: 768px) {\n  .side-panel {\n    width: 100%;\n    right: -100%;\n  }\n  .side-panel.open {\n    right: 0;\n  }\n}\n@media (max-width: 480px) {\n  .panel-header {\n    padding: 1rem;\n  }\n  .panel-content {\n    padding: 1rem;\n  }\n  .overall-score-card {\n    padding: 1.5rem;\n  }\n  .score-circle {\n    width: 100px;\n    height: 100px;\n  }\n  .score-number {\n    font-size: 2.5rem;\n  }\n  .mentor-card {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=lesson-detail.component.css.map */\n";
  }
});

// src/app/features/learning/lesson-detail.component.ts
var LessonDetailComponent;
var init_lesson_detail_component3 = __esm({
  "src/app/features/learning/lesson-detail.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_lesson_detail_component();
    init_lesson_detail_component2();
    init_core();
    init_router();
    init_platform_browser();
    init_toast_service();
    LessonDetailComponent = class LessonDetailComponent2 {
      route;
      router;
      sanitizer;
      toastService;
      lessonId = "";
      lessonData = null;
      videoUrl = null;
      // Signals for reactive state
      currentLineId = signal(null);
      isPlaying = signal(false);
      playbackSpeed = signal(1);
      showTranscript = signal(true);
      showVocabulary = signal(true);
      showGrammar = signal(true);
      currentTab = signal("transcript");
      // Speech recognition
      isRecording = signal(false);
      recognizedText = signal("");
      pronunciationScore = signal(null);
      // Progress tracking
      completedLines = signal(/* @__PURE__ */ new Set());
      bookmarkedLines = signal(/* @__PURE__ */ new Set());
      // AI Coach Integration
      aiFeedback = signal(null);
      isAnalyzing = signal(false);
      practiceHistory = signal([]);
      showAIPanel = signal(false);
      // Live Mentor Sessions
      mentorSessions = signal([]);
      showMentorPanel = signal(false);
      selectedMentorSession = signal(null);
      lessons = {
        "cafe-conversation": {
          id: "cafe-conversation",
          title: "Coffee Shop Conversation",
          videoId: "_ldiu5OiA9g",
          level: "beginner",
          category: "daily",
          thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
          dialogue: [
            { id: 1, speaker: "Priya", text: "Hey, are you ready to order?", timestamp: 0 },
            { id: 2, speaker: "Arjun", text: "Hi! Yes, can I have a cappuccino?", timestamp: 3 },
            { id: 3, speaker: "Priya", text: "Sure! Would you like anything else with that?", timestamp: 6 },
            { id: 4, speaker: "Arjun", text: "Uh, try the coffee cake. It's delicious!", timestamp: 10 },
            { id: 5, speaker: "Priya", text: "Oh thanks! Why not? And some coffee cake please.", timestamp: 14 },
            { id: 6, speaker: "Kavya", text: "Hey, are you studying here too?", timestamp: 20 },
            { id: 7, speaker: "Arjun", text: "Yes, I am! So where are you from?", timestamp: 23 },
            { id: 8, speaker: "Kavya", text: "I'm from Mumbai. Wow, that's so cool!", timestamp: 27 },
            { id: 9, speaker: "Arjun", text: "Thanks! What about you? Where are you from?", timestamp: 31 },
            { id: 10, speaker: "Kavya", text: "I'm from Delhi. Oh, that's far!", timestamp: 35 },
            { id: 11, speaker: "Arjun", text: "Yes it is, but I've met a lot of international students at our college.", timestamp: 39 },
            { id: 12, speaker: "Kavya", text: "Oh me too! I met someone from Bangalore yesterday.", timestamp: 45 },
            { id: 13, speaker: "Arjun", text: "It's great to be in such an international place!", timestamp: 50 },
            { id: 14, speaker: "Priya", text: "Excuse me, I'll bring you a cappuccino and coffee cake over to your table when they're ready.", timestamp: 55 },
            { id: 15, speaker: "Arjun", text: "Oh great, thank you!", timestamp: 62 },
            { id: 16, speaker: "Priya", text: "Along with your check.", timestamp: 65 }
          ],
          vocabulary: [
            { word: "cappuccino", meaning: "A type of coffee with steamed milk and foam", example: "I ordered a cappuccino at the caf\xE9." },
            { word: "delicious", meaning: "Very tasty or pleasant to eat", example: "This cake is absolutely delicious!" },
            { word: "international", meaning: "Involving different countries or cultures", example: "Our college has many international students." },
            { word: "excuse me", meaning: "Polite phrase to get attention or apologize", example: "Excuse me, could you help me?" },
            { word: "ready", meaning: "Prepared or willing to do something", example: "Are you ready to order now?" },
            { word: "order", meaning: "To request food or items to be brought", example: "Can I take your order, please?" },
            { word: "college", meaning: "Educational institution after high school", example: "I study engineering at college." },
            { word: "table", meaning: "Furniture with flat top for eating or working", example: "Please sit at that table." },
            { word: "check", meaning: "Bill showing money owed for services", example: "Can I have the check, please?" },
            { word: "met", meaning: "Past tense of meet; to come together", example: "I met a new friend yesterday." },
            { word: "cool", meaning: "Informal word meaning great or impressive", example: "That's so cool!" },
            { word: "studying", meaning: "Learning or examining subjects", example: "I'm studying English at the library." }
          ],
          grammar: [
            {
              title: "Present Continuous for Current Actions",
              explanation: 'Use "am/is/are + verb-ing" to describe actions happening now.',
              examples: [
                "Are you studying here? (happening now)",
                "I'm studying English. (current activity)",
                "They are waiting for coffee. (in progress)"
              ]
            },
            {
              title: 'Polite Requests with "Can I" and "Would you"',
              explanation: "Use these phrases to ask for things politely.",
              examples: [
                "Can I have a cappuccino?",
                "Would you like anything else?",
                "Can I take your order?"
              ]
            },
            {
              title: 'Question Formation with "Where"',
              explanation: 'Use "Where + auxiliary verb + subject" to ask about locations.',
              examples: [
                "Where are you from?",
                "Where do you study?",
                "Where is the caf\xE9?"
              ]
            },
            {
              title: `Present Perfect "I've met"`,
              explanation: 'Use "have/has + past participle" for experiences up to now.',
              examples: [
                "I've met many students. (life experience)",
                "She has visited three countries.",
                "We've studied together before."
              ]
            }
          ]
        },
        "museum-directions": {
          id: "museum-directions",
          title: "Asking for Directions",
          videoId: "yRM4wsXQ5KI",
          level: "beginner",
          category: "travel",
          thumbnail: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
          dialogue: [
            { id: 1, speaker: "Shopkeeper", text: "Hi there! Can I help you find something?", timestamp: 0 },
            { id: 2, speaker: "Rohan", text: "Hi! I want to go to the Museum of Modern Art, but I'm lost.", timestamp: 4 },
            { id: 3, speaker: "Rohan", text: "And my phone battery just died.", timestamp: 9 },
            { id: 4, speaker: "Shopkeeper", text: "Don't worry! I can give you directions.", timestamp: 12 },
            { id: 5, speaker: "Rohan", text: "Thank you! I'm new to the city and I feel like I've been walking in circles.", timestamp: 15 },
            { id: 6, speaker: "Shopkeeper", text: "So you're here on the corner of 84th and 3rd. Okay, I see.", timestamp: 21 },
            { id: 7, speaker: "Shopkeeper", text: "Go left onto 3rd and then walk two blocks.", timestamp: 27 },
            { id: 8, speaker: "Rohan", text: "Okay, two blocks. I understand. Then what do I do?", timestamp: 32 },
            { id: 9, speaker: "Shopkeeper", text: "And then at 82nd Street, turn right and walk four more blocks.", timestamp: 37 },
            { id: 10, speaker: "Rohan", text: "Okay, four more blocks. Then what?", timestamp: 43 },
            { id: 11, speaker: "Shopkeeper", text: "That's all! The museum's right there. You can't mistake it.", timestamp: 47 },
            { id: 12, speaker: "Rohan", text: "Thank you very much for your help!", timestamp: 52 },
            { id: 13, speaker: "Shopkeeper", text: "No problem! Enjoy the museum!", timestamp: 55 },
            { id: 14, speaker: "Shopkeeper", text: "And come back anytime if you want any souvenirs.", timestamp: 58 }
          ],
          vocabulary: [
            { word: "lost", meaning: "Unable to find your way or location", example: "I'm lost. Can you help me?" },
            { word: "directions", meaning: "Instructions for reaching a place", example: "Can you give me directions to the station?" },
            { word: "battery", meaning: "Power source for electronic devices", example: "My phone battery is dead." },
            { word: "corner", meaning: "Place where two streets meet", example: "The shop is on the corner." },
            { word: "blocks", meaning: "Distance between streets in a city", example: "Walk two blocks and turn left." },
            { word: "turn", meaning: "Change direction while moving", example: "Turn right at the next street." },
            { word: "museum", meaning: "Building displaying art or history", example: "Let's visit the art museum today." },
            { word: "souvenirs", meaning: "Items bought as reminders of a place", example: "I bought souvenirs for my family." },
            { word: "circles", meaning: "Round shapes; going in circles means lost", example: "I've been walking in circles." },
            { word: "mistake", meaning: `Error; "can't mistake it" means easy to find`, example: "You can't mistake the big building." }
          ],
          grammar: [
            {
              title: "Imperative Sentences for Directions",
              explanation: "Use base verb form to give commands or instructions.",
              examples: [
                "Go left onto 3rd street.",
                "Walk two blocks.",
                "Turn right at the corner."
              ]
            },
            {
              title: "Present Continuous for Temporary Situations",
              explanation: 'Use "am/is/are + verb-ing" for temporary states.',
              examples: [
                "I'm lost. (temporary state)",
                "My battery is dying. (happening now)",
                "I'm walking in circles. (current action)"
              ]
            },
            {
              title: 'Modal Verb "Can" for Ability and Offers',
              explanation: 'Use "can" to express ability or make offers.',
              examples: [
                "Can I help you? (offer)",
                "I can give you directions. (ability)",
                "You can't mistake it. (impossibility)"
              ]
            }
          ]
        },
        "order-coffee": {
          id: "order-coffee",
          title: "Order a Coffee",
          videoId: "order-coffee-local",
          level: "beginner",
          category: "daily",
          thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
          dialogue: [
            { id: 1, speaker: "Barista", text: "Good morning! Welcome to Coffee House. What can I get for you today?", timestamp: 0 },
            { id: 2, speaker: "Priya", text: "Good morning! I'd like a cappuccino, please.", timestamp: 4 },
            { id: 3, speaker: "Barista", text: "Sure! What size would you like? Small, medium, or large?", timestamp: 7 },
            { id: 4, speaker: "Priya", text: "I'll have a medium, please.", timestamp: 11 },
            { id: 5, speaker: "Barista", text: "Great choice! Would you like that hot or iced?", timestamp: 14 },
            { id: 6, speaker: "Priya", text: "Hot, please. Can I also get a chocolate muffin?", timestamp: 17 },
            { id: 7, speaker: "Barista", text: "Of course! Anything else?", timestamp: 21 },
            { id: 8, speaker: "Priya", text: "No, that's all. How much is it?", timestamp: 24 },
            { id: 9, speaker: "Barista", text: "That will be \u20B9350 in total.", timestamp: 27 },
            { id: 10, speaker: "Priya", text: "Here you go. Can I pay by card?", timestamp: 30 },
            { id: 11, speaker: "Barista", text: "Yes, of course. You can tap your card here.", timestamp: 33 },
            { id: 12, speaker: "Priya", text: "Perfect! Thank you so much!", timestamp: 36 }
          ],
          vocabulary: [
            { word: "cappuccino", meaning: "Espresso coffee with steamed milk foam", example: "I always order a cappuccino in the morning." },
            { word: "size", meaning: "How big or small something is", example: "What size drink would you like?" },
            { word: "medium", meaning: "Middle size, not too big or too small", example: "I'll have a medium coffee, please." },
            { word: "iced", meaning: "Cold drink with ice cubes", example: "I prefer iced coffee in summer." },
            { word: "muffin", meaning: "Small sweet cake", example: "The chocolate muffin looks delicious." },
            { word: "total", meaning: "Final amount after adding everything", example: "The total cost is \u20B9350." },
            { word: "tap", meaning: "Touch lightly, especially for card payment", example: "You can tap your card to pay." },
            { word: "barista", meaning: "Person who makes and serves coffee", example: "The barista makes excellent coffee." }
          ],
          grammar: [
            {
              title: `Polite Requests with "I'd like" and "Can I"`,
              explanation: `Use "I'd like" (I would like) for polite ordering and "Can I" to ask for things.`,
              examples: [
                "I'd like a cappuccino, please.",
                "Can I get a chocolate muffin?",
                "Can I pay by card?"
              ]
            },
            {
              title: "Size and Preference Questions",
              explanation: 'Questions about size and preferences using "would you like".',
              examples: [
                "What size would you like?",
                "Would you like that hot or iced?",
                "Would you like anything else?"
              ]
            },
            {
              title: 'Question Words: "How much"',
              explanation: 'Use "How much" to ask about price or cost.',
              examples: [
                "How much is it?",
                "How much does it cost?",
                "How much do I owe you?"
              ]
            }
          ]
        },
        "buy-museum-ticket": {
          id: "buy-museum-ticket",
          title: "Buy a Museum Ticket",
          videoId: "buy-museum-ticket-local",
          level: "beginner",
          category: "travel",
          thumbnail: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
          dialogue: [
            { id: 1, speaker: "Attendant", text: "Hello! Welcome to the National Museum. How may I help you?", timestamp: 0 },
            { id: 2, speaker: "Arjun", text: "Hi! I'd like to buy a ticket for the museum, please.", timestamp: 4 },
            { id: 3, speaker: "Attendant", text: "Certainly! Are you a student or an adult?", timestamp: 8 },
            { id: 4, speaker: "Arjun", text: "I'm a student. Do you offer student discounts?", timestamp: 11 },
            { id: 5, speaker: "Attendant", text: "Yes, we do! Student tickets are \u20B9200. Do you have your student ID?", timestamp: 15 },
            { id: 6, speaker: "Arjun", text: "Yes, here it is. Can I also get an audio guide?", timestamp: 20 },
            { id: 7, speaker: "Attendant", text: "Of course! The audio guide is \u20B9100 extra. What language would you prefer?", timestamp: 24 },
            { id: 8, speaker: "Arjun", text: "English, please. Are there any special exhibitions today?", timestamp: 29 },
            { id: 9, speaker: "Attendant", text: "Yes! We have an Indian art exhibition on the second floor.", timestamp: 33 },
            { id: 10, speaker: "Arjun", text: "That sounds interesting! Is it included in the ticket price?", timestamp: 38 },
            { id: 11, speaker: "Attendant", text: "Yes, it's included. Your total is \u20B9300.", timestamp: 42 },
            { id: 12, speaker: "Arjun", text: "Perfect! Here's my card.", timestamp: 46 },
            { id: 13, speaker: "Attendant", text: "Thank you. Here's your ticket and audio guide. The museum closes at 6 PM.", timestamp: 49 },
            { id: 14, speaker: "Arjun", text: "Thank you! What time does the last entry close?", timestamp: 54 },
            { id: 15, speaker: "Attendant", text: "Last entry is at 5:30 PM. Enjoy your visit!", timestamp: 57 }
          ],
          vocabulary: [
            { word: "ticket", meaning: "Paper or card that allows entry", example: "I need to buy a ticket for the museum." },
            { word: "student discount", meaning: "Reduced price for students", example: "Students get a 50% discount." },
            { word: "audio guide", meaning: "Device that plays information about exhibits", example: "The audio guide explains each painting." },
            { word: "exhibition", meaning: "Public display of art or objects", example: "There's a special exhibition on modern art." },
            { word: "included", meaning: "Part of the package, no extra cost", example: "Lunch is included in the tour price." },
            { word: "attendant", meaning: "Person who helps customers or visitors", example: "The museum attendant was very helpful." },
            { word: "entry", meaning: "Act of entering or admission", example: "Last entry is at 5 PM." },
            { word: "floor", meaning: "Level of a building", example: "The exhibition is on the second floor." },
            { word: "prefer", meaning: "Like one thing more than another", example: "Which language do you prefer?" },
            { word: "ID", meaning: "Identification card", example: "Please show your student ID." },
            { word: "closes", meaning: "Stops being open", example: "The museum closes at 6 PM." }
          ],
          grammar: [
            {
              title: 'Questions with "Do you" for Yes/No Answers',
              explanation: 'Use "Do you + verb" to ask questions expecting yes or no.',
              examples: [
                "Do you offer student discounts?",
                "Do you have your student ID?",
                "Do you want an audio guide?"
              ]
            },
            {
              title: 'Modal "Would" for Preferences',
              explanation: 'Use "would" to ask about preferences politely.',
              examples: [
                "What language would you prefer?",
                "What would you like to see?",
                "Would you like a map?"
              ]
            },
            {
              title: "Present Simple for General Information",
              explanation: "Use present simple to state facts and schedules.",
              examples: [
                "The museum closes at 6 PM.",
                "Last entry is at 5:30 PM.",
                "Student tickets are \u20B9200."
              ]
            },
            {
              title: 'Questions with "Is there" / "Are there"',
              explanation: "Use these to ask about existence of things.",
              examples: [
                "Are there any special exhibitions?",
                "Is it included in the price?",
                "Are there guided tours?"
              ]
            }
          ]
        },
        "how-i-get-to-school": {
          id: "how-i-get-to-school",
          title: "How I Get to School",
          videoId: "how-i-get-to-school-local",
          level: "beginner",
          category: "daily",
          thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
          dialogue: [
            { id: 1, speaker: "Kavya", text: "Hey Rohan! How do you usually get to school?", timestamp: 0 },
            { id: 2, speaker: "Rohan", text: "Hi Kavya! I usually take the metro. It's really convenient.", timestamp: 4 },
            { id: 3, speaker: "Kavya", text: "Oh, that's nice! How long does it take?", timestamp: 8 },
            { id: 4, speaker: "Rohan", text: "It takes about 30 minutes from my home to the school station.", timestamp: 11 },
            { id: 5, speaker: "Kavya", text: "That's not bad! Do you walk to the metro station?", timestamp: 16 },
            { id: 6, speaker: "Rohan", text: "Yes, it's just a 10-minute walk from my house. What about you?", timestamp: 20 },
            { id: 7, speaker: "Kavya", text: "I take the school bus. It picks me up at 7:30 AM every morning.", timestamp: 25 },
            { id: 8, speaker: "Rohan", text: "That's convenient! Do you have to wait long for the bus?", timestamp: 30 },
            { id: 9, speaker: "Kavya", text: "No, it's always on time. The journey takes about 40 minutes.", timestamp: 34 },
            { id: 10, speaker: "Rohan", text: "Do you ever walk or cycle to school?", timestamp: 39 },
            { id: 11, speaker: "Kavya", text: "Sometimes I cycle on weekends when I have extra classes.", timestamp: 43 },
            { id: 12, speaker: "Rohan", text: "That's great exercise! I should try cycling too.", timestamp: 48 },
            { id: 13, speaker: "Kavya", text: "You should! It's fun and healthy. Plus, you save money on transport!", timestamp: 52 }
          ],
          vocabulary: [
            { word: "usually", meaning: "Most of the time, normally", example: "I usually take the bus to school." },
            { word: "metro", meaning: "Underground train system", example: "The metro is faster than buses." },
            { word: "convenient", meaning: "Easy to use or suitable", example: "Online shopping is very convenient." },
            { word: "takes", meaning: "Requires a certain amount of time", example: "It takes 20 minutes to walk there." },
            { word: "station", meaning: "Place where trains or buses stop", example: "Meet me at the metro station." },
            { word: "picks up", meaning: "Collects someone in a vehicle", example: "The bus picks me up at 8 AM." },
            { word: "journey", meaning: "Trip from one place to another", example: "The journey was very comfortable." },
            { word: "cycle", meaning: "Ride a bicycle", example: "I cycle to work every day." },
            { word: "exercise", meaning: "Physical activity for health", example: "Walking is good exercise." },
            { word: "transport", meaning: "Way of traveling or moving", example: "Public transport is affordable." }
          ],
          grammar: [
            {
              title: "Present Simple for Routines and Habits",
              explanation: "Use present simple to talk about regular activities and daily routines.",
              examples: [
                "I usually take the metro.",
                "It takes 30 minutes.",
                "The bus picks me up at 7:30."
              ]
            },
            {
              title: 'Question Formation with "How"',
              explanation: 'Use "How" to ask about methods, time, and manner.',
              examples: [
                "How do you get to school?",
                "How long does it take?",
                "How far is it?"
              ]
            },
            {
              title: 'Frequency Adverbs: "usually", "always", "sometimes"',
              explanation: "These words show how often something happens.",
              examples: [
                "I usually take the bus. (most times)",
                "It's always on time. (every time)",
                "Sometimes I cycle. (occasionally)"
              ]
            }
          ]
        }
      };
      constructor(route, router, sanitizer, toastService) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.toastService = toastService;
      }
      ngOnInit() {
        this.route.params.subscribe((params) => {
          this.lessonId = params["id"];
          this.loadLesson();
        });
      }
      ngOnDestroy() {
        this.stopAllAudio();
      }
      loadLesson() {
        this.lessonData = this.lessons[this.lessonId] || null;
        if (this.lessonData) {
          this.loadMentorSessions();
          if (this.lessonData.videoId.includes("local")) {
            let videoFileName = "";
            switch (this.lessonId) {
              case "order-coffee":
                videoFileName = "Order a coffee.mp4";
                break;
              case "buy-museum-ticket":
                videoFileName = "Buy a museum ticket.mp4";
                break;
              case "how-i-get-to-school":
                videoFileName = "how I get to school.mp4";
                break;
            }
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/${videoFileName}`);
          } else {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.lessonData.videoId}?enablejsapi=1`);
          }
        }
      }
      playLine(line) {
        this.currentLineId.set(line.id);
        if ("speechSynthesis" in window) {
          const utterance = new SpeechSynthesisUtterance(line.text);
          utterance.lang = "en-US";
          utterance.rate = this.playbackSpeed();
          const voices = speechSynthesis.getVoices();
          const femaleVoice = voices.find((voice) => voice.name.includes("Female") || voice.name.includes("female") || voice.name.includes("Samantha") || voice.name.includes("Victoria"));
          if (femaleVoice) {
            utterance.voice = femaleVoice;
          }
          utterance.onend = () => {
            this.currentLineId.set(null);
            this.completedLines.update((lines) => /* @__PURE__ */ new Set([...lines, line.id]));
          };
          speechSynthesis.cancel();
          speechSynthesis.speak(utterance);
        }
      }
      playVocabulary(word) {
        if ("speechSynthesis" in window) {
          const utterance = new SpeechSynthesisUtterance(word.word);
          utterance.lang = "en-US";
          utterance.rate = 0.8;
          const voices = speechSynthesis.getVoices();
          const femaleVoice = voices.find((voice) => voice.name.includes("Female") || voice.name.includes("Samantha"));
          if (femaleVoice) {
            utterance.voice = femaleVoice;
          }
          speechSynthesis.cancel();
          speechSynthesis.speak(utterance);
        }
      }
      stopAllAudio() {
        if ("speechSynthesis" in window) {
          speechSynthesis.cancel();
        }
      }
      toggleBookmark(lineId) {
        this.bookmarkedLines.update((lines) => {
          const newSet = new Set(lines);
          if (newSet.has(lineId)) {
            newSet.delete(lineId);
          } else {
            newSet.add(lineId);
          }
          return newSet;
        });
      }
      setPlaybackSpeed(speed) {
        this.playbackSpeed.set(speed);
      }
      switchTab(tab) {
        this.currentTab.set(tab);
      }
      startRecording(line) {
        if (!("webkitSpeechRecognition" in window)) {
          this.toastService.error("Speech recognition not supported in this browser");
          return;
        }
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;
        this.isRecording.set(true);
        this.recognizedText.set("");
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          this.recognizedText.set(transcript);
          const score = this.calculatePronunciationScore(line.text, transcript);
          this.practiceHistory.update((history) => [
            ...history,
            { lineId: line.id, text: transcript, score, timestamp: /* @__PURE__ */ new Date() }
          ]);
          this.generateAIFeedback(line.text, transcript, score);
          this.isRecording.set(false);
        };
        recognition.onerror = () => {
          this.isRecording.set(false);
          this.toastService.error("Error in speech recognition. Please try again.");
        };
        recognition.onend = () => {
          this.isRecording.set(false);
        };
        recognition.start();
      }
      calculatePronunciationScore(original, spoken) {
        const originalWords = original.toLowerCase().split(/\s+/);
        const spokenWords = spoken.toLowerCase().split(/\s+/);
        let matches = 0;
        for (const word of spokenWords) {
          if (originalWords.includes(word)) {
            matches++;
          }
        }
        const score = Math.round(matches / originalWords.length * 100);
        this.pronunciationScore.set(Math.min(score, 100));
        return Math.min(score, 100);
      }
      getProgressPercentage() {
        if (!this.lessonData)
          return 0;
        return Math.round(this.completedLines().size / this.lessonData.dialogue.length * 100);
      }
      goBack() {
        this.router.navigate(["/learning"]);
      }
      downloadTranscript() {
        if (!this.lessonData)
          return;
        let content = `${this.lessonData.title}

`;
        content += "TRANSCRIPT:\n\n";
        this.lessonData.dialogue.forEach((line) => {
          content += `${line.speaker}: ${line.text}
`;
        });
        content += "\n\nVOCABULARY:\n\n";
        this.lessonData.vocabulary.forEach((item) => {
          content += `${item.word}: ${item.meaning}
`;
          content += `Example: ${item.example}

`;
        });
        const blob = new Blob([content], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.lessonData.id}-transcript.txt`;
        a.click();
      }
      // AI Coach Methods
      generateAIFeedback(original, spoken, score) {
        this.isAnalyzing.set(true);
        setTimeout(() => {
          const originalWords = original.toLowerCase().split(/\s+/);
          const spokenWords = spoken.toLowerCase().split(/\s+/);
          const pronunciationErrors = [];
          const missedWords = originalWords.filter((word) => !spokenWords.includes(word));
          if (missedWords.length > 0) {
            pronunciationErrors.push(`Missed words: ${missedWords.join(", ")}`);
          }
          const grammarErrors = [];
          const corrections = [];
          if (!spoken.match(/^[A-Z]/)) {
            grammarErrors.push("Sentence should start with a capital letter");
            corrections.push("Always begin sentences with uppercase");
          }
          if (!spoken.match(/[.!?]$/)) {
            grammarErrors.push("Missing punctuation at the end");
          }
          const wordCount = spokenWords.length;
          const fluencyScore = Math.min(100, wordCount / originalWords.length * 100);
          let fluencyFeedback = "";
          if (fluencyScore >= 90) {
            fluencyFeedback = "Excellent fluency! You spoke naturally and smoothly.";
          } else if (fluencyScore >= 70) {
            fluencyFeedback = "Good fluency, but try to speak more smoothly without long pauses.";
          } else {
            fluencyFeedback = "Practice more to improve fluency. Try speaking the sentence multiple times.";
          }
          const accentTips = [
            "Focus on word stress patterns",
            "Practice intonation at the end of questions",
            "Clear pronunciation of consonant clusters"
          ];
          const feedback = {
            overallScore: Math.round((score + fluencyScore) / 2),
            pronunciation: {
              score,
              errors: pronunciationErrors,
              suggestions: [
                "Listen to native speakers carefully",
                "Record yourself and compare with the original",
                "Practice difficult words slowly first"
              ]
            },
            grammar: {
              score: grammarErrors.length === 0 ? 100 : 75,
              errors: grammarErrors.length > 0 ? grammarErrors : ["No major errors detected"],
              corrections: corrections.length > 0 ? corrections : ["Keep up the good work!"]
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
      toggleAIPanel() {
        this.showAIPanel.update((show) => !show);
      }
      closeAIPanel() {
        this.showAIPanel.set(false);
      }
      // Live Mentor Methods
      loadMentorSessions() {
        const mockSessions = [
          {
            id: "ms-1",
            mentorName: "Dr. Priya Sharma",
            mentorPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "2025-12-18",
            time: "10:00 AM IST",
            duration: "60 minutes",
            availableSlots: 5,
            price: 500,
            topics: ["Video Context Explanation", "Grammar Deep Dive", "Q&A Session"],
            rating: 4.8
          },
          {
            id: "ms-2",
            mentorName: "Prof. Arjun Patel",
            mentorPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "2025-12-19",
            time: "3:00 PM IST",
            duration: "45 minutes",
            availableSlots: 8,
            price: 400,
            topics: ["Pronunciation Practice", "Cultural Context", "Doubt Resolution"],
            rating: 4.9
          },
          {
            id: "ms-3",
            mentorName: "Ms. Kavya Reddy",
            mentorPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
            date: "2025-12-20",
            time: "6:00 PM IST",
            duration: "90 minutes",
            availableSlots: 3,
            price: 700,
            topics: ["Complete Scene Analysis", "Vocabulary Building", "Real-life Application"],
            rating: 5
          }
        ];
        this.mentorSessions.set(mockSessions);
      }
      toggleMentorPanel() {
        this.showMentorPanel.update((show) => !show);
      }
      closeMentorPanel() {
        this.showMentorPanel.set(false);
        this.selectedMentorSession.set(null);
      }
      selectMentorSession(session) {
        this.selectedMentorSession.set(session);
      }
      bookMentorSession(session) {
        this.toastService.success(`Booking session with ${session.mentorName}!`);
        setTimeout(() => {
          this.toastService.info("Redirecting to payment page...");
        }, 1500);
      }
      navigateToAICoach() {
        this.router.navigate(["/ai-coach"], {
          queryParams: {
            lessonId: this.lessonId,
            practiceData: JSON.stringify(this.practiceHistory())
          }
        });
      }
      navigateToLiveSessions() {
        this.router.navigate(["/live"], {
          queryParams: { lessonId: this.lessonId }
        });
      }
      static ctorParameters = () => [
        { type: ActivatedRoute },
        { type: Router },
        { type: DomSanitizer },
        { type: ToastService }
      ];
    };
    LessonDetailComponent = __decorate([
      Component({
        selector: "app-lesson-detail",
        standalone: false,
        template: lesson_detail_component_default,
        styles: [lesson_detail_component_default2]
      })
    ], LessonDetailComponent);
  }
});

// src/app/features/learning/lesson-detail.component.spec.ts
var require_lesson_detail_component_spec = __commonJS({
  "src/app/features/learning/lesson-detail.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_platform_browser();
    init_esm();
    init_lesson_detail_component3();
    init_toast_service();
    describe("LessonDetailComponent", () => {
      let component;
      let fixture;
      let mockActivatedRoute;
      let mockRouter;
      let mockToastService;
      let mockDomSanitizer;
      beforeEach(() => __async(null, null, function* () {
        mockActivatedRoute = {
          params: of({ id: "test-lesson-id" }),
          snapshot: {
            params: { id: "test-lesson-id" }
          }
        };
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        mockToastService = jasmine.createSpyObj("ToastService", ["success", "error", "info"]);
        mockDomSanitizer = jasmine.createSpyObj("DomSanitizer", ["bypassSecurityTrustResourceUrl"]);
        mockDomSanitizer.bypassSecurityTrustResourceUrl.and.returnValue("safe-url");
        yield TestBed.configureTestingModule({
          declarations: [LessonDetailComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: ActivatedRoute, useValue: mockActivatedRoute },
            { provide: Router, useValue: mockRouter },
            { provide: ToastService, useValue: mockToastService },
            { provide: DomSanitizer, useValue: mockDomSanitizer }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LessonDetailComponent);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize with default values", () => {
        expect(component.currentTab()).toBe("transcript");
        expect(component.isRecording()).toBe(false);
        expect(component.isPlaying()).toBe(false);
      });
      it("should have lessons data", () => {
        expect(component.lessonId).toBeDefined();
      });
    });
  }
});
export default require_lesson_detail_component_spec();
//# sourceMappingURL=spec-app-features-learning-lesson-detail.component.spec.js.map
