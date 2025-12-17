import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = '/api';

  constructor(private http: HttpClient) {}

  // Mock API calls - replace with real HTTP calls in production
  get<T>(endpoint: string): Observable<T> {
    // In development, return mock data
    return this.getMockData<T>(endpoint);
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    console.log(`POST ${endpoint}:`, data);
    return this.getMockData<T>(endpoint);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    console.log(`PUT ${endpoint}:`, data);
    return this.getMockData<T>(endpoint);
  }

  delete<T>(endpoint: string): Observable<T> {
    console.log(`DELETE ${endpoint}`);
    return this.getMockData<T>(endpoint);
  }

  private getMockData<T>(endpoint: string): Observable<T> {
    // Route to appropriate mock data based on endpoint
    let mockData: any;

    switch (true) {
      case endpoint.includes('/courses'):
        mockData = this.getCourseMockData(endpoint);
        break;
      case endpoint.includes('/modules'):
        mockData = this.getModuleMockData(endpoint);
        break;
      case endpoint.includes('/rooms'):
        mockData = this.getRoomMockData(endpoint);
        break;
      case endpoint.includes('/wallet'):
        mockData = this.getWalletMockData(endpoint);
        break;
      case endpoint.includes('/auth/login'):
        mockData = { token: 'mock_token', user: { id: '1', name: 'User' } };
        break;
      default:
        mockData = { message: 'Mock response' };
    }

    return of(mockData as T).pipe(delay(500)); // Simulate network delay
  }

  private getCourseMockData(endpoint: string): any {
    if (endpoint.includes('/courses/')) {
      // Single course
      return {
        id: 'course-1',
        title: 'Business English Mastery',
        description: 'Master professional English communication for the modern workplace',
        duration: '8 weeks',
        level: 'Intermediate',
        price: 299,
        mentor: 'Sarah Johnson',
        syllabus: ['Week 1: Email Communication', 'Week 2: Meetings & Presentations'],
        enrolledCount: 1247
      };
    } else {
      // Courses list
      return [
        {
          id: 'course-1',
          title: 'Business English Mastery',
          description: 'Master professional English communication',
          price: 299,
          duration: '8 weeks',
          level: 'Intermediate',
          thumbnail: '/courses/business-english.jpg'
        },
        {
          id: 'course-2',
          title: 'Interview Success in English',
          description: 'Ace your English job interviews with confidence',
          price: 199,
          duration: '4 weeks',
          level: 'Beginner',
          thumbnail: '/courses/interview-english.jpg'
        }
      ];
    }
  }

  private getModuleMockData(endpoint: string): any {
    if (endpoint.includes('/record-speech')) {
      return {
        transcript: 'Hello, my name is John and I am interested in this position.',
        score: 87,
        feedback: [
          'Excellent pronunciation of "interested"',
          'Consider slowing down slightly for better clarity',
          'Great confidence in delivery'
        ]
      };
    } else {
      return {
        id: 'module-1',
        title: 'Job Interview Simulation',
        scenarioType: 'interview',
        difficulty: 'intermediate',
        videos: [
          'https://youtu.be/IArd6ZadFJ4?si=_Ql4VvNy-_6g_057',
          'https://youtu.be/yRM4wsXQ5KI?si=WdOmgwsr930OhdSs',
          'https://youtu.be/_ldiu5OiA9g?si=OiXNq-9CHuU77LoW'
        ],
        transcript: 'Welcome to our company. Please tell me about yourself...'
      };
    }
  }

  private getRoomMockData(endpoint: string): any {
    if (endpoint.includes('/join')) {
      return { roomId: 'room-123', joinUrl: 'https://meet.vreal.com/room-123' };
    } else {
      return [
        {
          id: 'room-1',
          title: 'Business English Practice',
          mentor: 'Sarah Johnson',
          participants: 12,
          maxParticipants: 15,
          scheduledTime: '2024-01-15T14:00:00Z',
          status: 'scheduled'
        },
        {
          id: 'room-2',
          title: 'Conversation Club',
          mentor: 'Mike Chen',
          participants: 8,
          maxParticipants: 10,
          scheduledTime: '2024-01-15T16:00:00Z',
          status: 'live'
        }
      ];
    }
  }

  private getWalletMockData(endpoint: string): any {
    return {
      balance: 250,
      transactions: [
        {
          id: 'tx-1',
          type: 'credit',
          amount: 100,
          description: 'Welcome bonus',
          date: '2024-01-10T10:00:00Z'
        },
        {
          id: 'tx-2',
          type: 'debit',
          amount: 50,
          description: 'Course enrollment',
          date: '2024-01-12T14:30:00Z'
        }
      ]
    };
  }
}