import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'daily' | 'travel' | 'business';
  duration: string;
  dialogueLines: number;
  vocabularyCount: number;
  grammarPoints: number;
}

@Component({
  selector: 'app-learning-page',
  standalone: false,
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent {
  selectedCategory: 'all' | 'daily' | 'travel' | 'business' = 'all';

  goBack(): void {
    this.router.navigate(['/']);
  }

  lessons: VideoLesson[] = [
    {
      id: 'cafe-conversation',
      title: 'Coffee Shop Conversation',
      description: 'Learn how to order at a café and make small talk with new friends in English',
      thumbnail: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      videoId: '_ldiu5OiA9g',
      level: 'beginner',
      category: 'daily',
      duration: '3:45',
      dialogueLines: 16,
      vocabularyCount: 12,
      grammarPoints: 4
    },
    {
      id: 'museum-directions',
      title: 'Asking for Directions',
      description: 'Master the art of asking for and giving directions in a shop or on the street',
      thumbnail: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80',
      videoId: 'yRM4wsXQ5KI',
      level: 'beginner',
      category: 'travel',
      duration: '2:30',
      dialogueLines: 14,
      vocabularyCount: 10,
      grammarPoints: 3
    },
    {
      id: 'order-coffee',
      title: 'Order a Coffee',
      description: 'Learn essential phrases for ordering coffee at a café with proper pronunciation',
      thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      videoId: 'order-coffee-local',
      level: 'beginner',
      category: 'daily',
      duration: '2:15',
      dialogueLines: 12,
      vocabularyCount: 8,
      grammarPoints: 3
    },
    {
      id: 'buy-museum-ticket',
      title: 'Buy a Museum Ticket',
      description: 'Master the conversation for purchasing tickets at tourist attractions and museums',
      thumbnail: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80',
      videoId: 'buy-museum-ticket-local',
      level: 'beginner',
      category: 'travel',
      duration: '2:45',
      dialogueLines: 15,
      vocabularyCount: 11,
      grammarPoints: 4
    },
    {
      id: 'how-i-get-to-school',
      title: 'How I Get to School',
      description: 'Practice talking about daily routines and transportation methods in English',
      thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
      videoId: 'how-i-get-to-school-local',
      level: 'beginner',
      category: 'daily',
      duration: '3:00',
      dialogueLines: 13,
      vocabularyCount: 10,
      grammarPoints: 3
    }
  ];

  constructor(private router: Router) { }

  getFilteredLessons(): VideoLesson[] {
    if (this.selectedCategory === 'all') {
      return this.lessons;
    }
    return this.lessons.filter(lesson => lesson.category === this.selectedCategory);
  }

  getTotalDialogues(): number {
    return this.lessons.reduce((sum, lesson) => sum + lesson.dialogueLines, 0);
  }

  getTotalVocabulary(): number {
    return this.lessons.reduce((sum, lesson) => sum + lesson.vocabularyCount, 0);
  }

  getTotalGrammar(): number {
    return this.lessons.reduce((sum, lesson) => sum + lesson.grammarPoints, 0);
  }

  startLesson(lesson: VideoLesson): void {
    this.router.navigate(['/learning', lesson.id]);
  }
}
