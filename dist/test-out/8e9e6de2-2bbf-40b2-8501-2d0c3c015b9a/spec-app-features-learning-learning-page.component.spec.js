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
  provideZonelessChangeDetection
} from "./chunk-EI44HNNH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/learning/learning-page.component.html
var learning_page_component_default;
var init_learning_page_component = __esm({
  "angular:jit:template:src/app/features/learning/learning-page.component.html"() {
    learning_page_component_default = `<div class="learning-container">
  <div class="container">
    <button class="back-btn" (click)="goBack()">
      <span class="back-icon">\u2190</span> Back to Home
    </button>
    <div class="page-header">
      <h1>Interactive Video Lessons</h1>
      <p class="page-subtitle">Learn English Through Real-Life Conversations with Interactive Practice</p>
    </div>

    <!-- Lesson Categories -->
    <div class="category-filter">
      <button 
        class="category-btn"
        [class.active]="selectedCategory === 'all'"
        (click)="selectedCategory = 'all'">
        All Lessons
      </button>
      <button 
        class="category-btn"
        [class.active]="selectedCategory === 'daily'"
        (click)="selectedCategory = 'daily'">
        Daily Life
      </button>
      <button 
        class="category-btn"
        [class.active]="selectedCategory === 'travel'"
        (click)="selectedCategory = 'travel'">
        Travel & Tourism
      </button>
      <button 
        class="category-btn"
        [class.active]="selectedCategory === 'business'"
        (click)="selectedCategory = 'business'">
        Business English
      </button>
    </div>

    <!-- Video Lessons Grid -->
    <div class="lessons-grid">
      <div class="lesson-card" *ngFor="let lesson of getFilteredLessons()">
        <div class="lesson-thumbnail" [style.background-image]="'url(' + lesson.thumbnail + ')'">
          <div class="lesson-overlay">
            <button class="play-btn" (click)="startLesson(lesson)">
              <span class="play-icon">\u25B6</span>
            </button>
          </div>
          <div class="lesson-badges">
            <span class="level-badge" [class]="'level-' + lesson.level">{{ lesson.level }}</span>
            <span class="duration-badge">\u23F1\uFE0F {{ lesson.duration }}</span>
          </div>
        </div>
        <div class="lesson-content">
          <h3>{{ lesson.title }}</h3>
          <p class="lesson-description">{{ lesson.description }}</p>
          <div class="lesson-features">
            <span class="feature-tag">\u{1F399}\uFE0F {{ lesson.dialogueLines }} Lines</span>
            <span class="feature-tag">\u{1F4DA} {{ lesson.vocabularyCount }} Words</span>
            <span class="feature-tag">\u270F\uFE0F {{ lesson.grammarPoints }} Grammar</span>
          </div>
          <button class="start-lesson-btn" (click)="startLesson(lesson)">
            Start Lesson
            <span class="arrow">\u2192</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-icon">\u{1F4F9}</div>
        <div class="stat-number">{{ lessons.length }}</div>
        <div class="stat-label">Video Lessons</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">\u{1F4AC}</div>
        <div class="stat-number">{{ getTotalDialogues() }}</div>
        <div class="stat-label">Dialogue Lines</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">\u{1F4D6}</div>
        <div class="stat-number">{{ getTotalVocabulary() }}</div>
        <div class="stat-label">Vocabulary Words</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">\u2728</div>
        <div class="stat-number">{{ getTotalGrammar() }}</div>
        <div class="stat-label">Grammar Points</div>
      </div>
    </div>
  </div>
</div>
`;
  }
});

// angular:jit:style:src/app/features/learning/learning-page.component.css
var learning_page_component_default2;
var init_learning_page_component2 = __esm({
  "angular:jit:style:src/app/features/learning/learning-page.component.css"() {
    learning_page_component_default2 = "/* src/app/features/learning/learning-page.component.css */\n.learning-container {\n  min-height: 100vh;\n  padding: 5rem 0 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n}\n.container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 3rem;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.05),\n      rgba(0, 194, 138, 0.05));\n  border-radius: 20px;\n  border: 2px solid rgba(11, 110, 255, 0.1);\n}\n.page-header h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.75rem;\n}\n.page-subtitle {\n  font-size: 1.15rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.category-filter {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 2.5rem;\n  padding: 0.75rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow-x: auto;\n}\n.category-btn {\n  padding: 0.875rem 1.5rem;\n  background: transparent;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.category-btn:hover {\n  border-color: #0B6EFF;\n  color: #0B6EFF;\n  background: rgba(11, 110, 255, 0.05);\n}\n.category-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border-color: transparent;\n  color: white;\n  box-shadow: 0 4px 15px rgba(11, 110, 255, 0.3);\n}\n.lessons-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.lesson-card {\n  background: white;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.lesson-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.lesson-thumbnail {\n  position: relative;\n  height: 220px;\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n}\n.lesson-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.1) 0%,\n      rgba(0, 0, 0, 0.5) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.lesson-card:hover .lesson-overlay {\n  opacity: 1;\n}\n.play-btn {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border: none;\n  border-radius: 50%;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 25px rgba(11, 110, 255, 0.4);\n  transition: all 0.3s ease;\n}\n.play-btn:hover {\n  transform: scale(1.1);\n  box-shadow: 0 12px 35px rgba(11, 110, 255, 0.6);\n}\n.play-icon {\n  margin-left: 4px;\n}\n.lesson-badges {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  right: 1rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.level-badge,\n.duration-badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.level-badge.level-beginner {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 194, 138, 0.95),\n      rgba(0, 162, 115, 0.95));\n  color: white;\n}\n.level-badge.level-intermediate {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(11, 110, 255, 0.95),\n      rgba(10, 86, 204, 0.95));\n  color: white;\n}\n.level-badge.level-advanced {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 53, 0.95),\n      rgba(224, 90, 43, 0.95));\n  color: white;\n}\n.duration-badge {\n  background: rgba(255, 255, 255, 0.95);\n  color: #0f1724;\n}\n.lesson-content {\n  padding: 1.5rem;\n}\n.lesson-content h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 0.75rem;\n  line-height: 1.4;\n}\n.lesson-description {\n  font-size: 0.875rem;\n  color: #6c757d;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.lesson-features {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.feature-tag {\n  padding: 0.375rem 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n.start-lesson-btn {\n  width: 100%;\n  padding: 0.875rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.start-lesson-btn:hover {\n  box-shadow: 0 6px 20px rgba(11, 110, 255, 0.4);\n  transform: translateY(-2px);\n}\n.arrow {\n  font-size: 1.25rem;\n  transition: transform 0.3s ease;\n}\n.start-lesson-btn:hover .arrow {\n  transform: translateX(4px);\n}\n.stats-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-top: 3rem;\n}\n.stat-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.stat-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.stat-number {\n  font-size: 2rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0B6EFF,\n      #00C28A);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.5rem;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: #6c757d;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .page-header h1 {\n    font-size: 1.75rem;\n  }\n  .page-subtitle {\n    font-size: 1rem;\n  }\n  .lessons-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .category-filter {\n    justify-content: flex-start;\n  }\n  .stats-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .page-header {\n    padding: 1.5rem 1rem;\n  }\n  .lesson-content h3 {\n    font-size: 1.125rem;\n  }\n  .stats-section {\n    grid-template-columns: 1fr;\n  }\n}\n.note {\n  color: var(--brand-primary);\n  font-weight: 600;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=learning-page.component.css.map */\n";
  }
});

// src/app/features/learning/learning-page.component.ts
var LearningPageComponent;
var init_learning_page_component3 = __esm({
  "src/app/features/learning/learning-page.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_learning_page_component();
    init_learning_page_component2();
    init_core();
    init_router();
    LearningPageComponent = class LearningPageComponent2 {
      router;
      selectedCategory = "all";
      goBack() {
        this.router.navigate(["/"]);
      }
      lessons = [
        {
          id: "cafe-conversation",
          title: "Coffee Shop Conversation",
          description: "Learn how to order at a caf\xE9 and make small talk with new friends in English",
          thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
          videoId: "_ldiu5OiA9g",
          level: "beginner",
          category: "daily",
          duration: "3:45",
          dialogueLines: 16,
          vocabularyCount: 12,
          grammarPoints: 4
        },
        {
          id: "museum-directions",
          title: "Asking for Directions",
          description: "Master the art of asking for and giving directions in a shop or on the street",
          thumbnail: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
          videoId: "yRM4wsXQ5KI",
          level: "beginner",
          category: "travel",
          duration: "2:30",
          dialogueLines: 14,
          vocabularyCount: 10,
          grammarPoints: 3
        },
        {
          id: "order-coffee",
          title: "Order a Coffee",
          description: "Learn essential phrases for ordering coffee at a caf\xE9 with proper pronunciation",
          thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
          videoId: "order-coffee-local",
          level: "beginner",
          category: "daily",
          duration: "2:15",
          dialogueLines: 12,
          vocabularyCount: 8,
          grammarPoints: 3
        },
        {
          id: "buy-museum-ticket",
          title: "Buy a Museum Ticket",
          description: "Master the conversation for purchasing tickets at tourist attractions and museums",
          thumbnail: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
          videoId: "buy-museum-ticket-local",
          level: "beginner",
          category: "travel",
          duration: "2:45",
          dialogueLines: 15,
          vocabularyCount: 11,
          grammarPoints: 4
        },
        {
          id: "how-i-get-to-school",
          title: "How I Get to School",
          description: "Practice talking about daily routines and transportation methods in English",
          thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
          videoId: "how-i-get-to-school-local",
          level: "beginner",
          category: "daily",
          duration: "3:00",
          dialogueLines: 13,
          vocabularyCount: 10,
          grammarPoints: 3
        }
      ];
      constructor(router) {
        this.router = router;
      }
      getFilteredLessons() {
        if (this.selectedCategory === "all") {
          return this.lessons;
        }
        return this.lessons.filter((lesson) => lesson.category === this.selectedCategory);
      }
      getTotalDialogues() {
        return this.lessons.reduce((sum, lesson) => sum + lesson.dialogueLines, 0);
      }
      getTotalVocabulary() {
        return this.lessons.reduce((sum, lesson) => sum + lesson.vocabularyCount, 0);
      }
      getTotalGrammar() {
        return this.lessons.reduce((sum, lesson) => sum + lesson.grammarPoints, 0);
      }
      startLesson(lesson) {
        this.router.navigate(["/learning", lesson.id]);
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    LearningPageComponent = __decorate([
      Component({
        selector: "app-learning-page",
        standalone: false,
        template: learning_page_component_default,
        styles: [learning_page_component_default2]
      })
    ], LearningPageComponent);
  }
});

// src/app/features/learning/learning-page.component.spec.ts
var require_learning_page_component_spec = __commonJS({
  "src/app/features/learning/learning-page.component.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_learning_page_component3();
    describe("LearningPageComponent", () => {
      let component;
      let fixture;
      let mockRouter;
      beforeEach(() => __async(null, null, function* () {
        mockRouter = jasmine.createSpyObj("Router", ["navigate"]);
        yield TestBed.configureTestingModule({
          declarations: [LearningPageComponent],
          providers: [
            provideZonelessChangeDetection(),
            { provide: Router, useValue: mockRouter }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LearningPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize with lessons", () => {
        expect(component.lessons).toBeDefined();
        expect(component.lessons.length).toBeGreaterThan(0);
      });
    });
  }
});
export default require_learning_page_component_spec();
//# sourceMappingURL=spec-app-features-learning-learning-page.component.spec.js.map
