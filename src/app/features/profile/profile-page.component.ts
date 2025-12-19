import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  joinedDate: Date;
  totalPracticeTime: number; // in minutes
  coursesCompleted: number;
  currentStreak: number;
  longestStreak: number;
  creditsBalance: number;
  achievements: Achievement[];
  recentActivity: Activity[];
}

interface Achievement {
  title: string;
  icon: string;
  date: Date;
  description: string;
}

interface Activity {
  type: string;
  description: string;
  date: Date;
  duration?: number;
}

@Component({ 
  selector: 'app-profile-page', 
  templateUrl: './profile-page.component.html', 
  styleUrls: ['./profile-page.component.css'],
  standalone: false
})
export class ProfilePageComponent implements OnInit {
  profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces';

  user: UserProfile = {
    name: 'Bhushan Sunil Bari',
    email: 'bhushan.bari@gmail.com',
    phone: '+91 8856096495',
    address: 'Hinjewadi, IT Park Phase 1',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    pincode: '411057',
    level: 'Intermediate',
    joinedDate: new Date('2024-03-15'),
    totalPracticeTime: 2847, // minutes
    coursesCompleted: 8,
    currentStreak: 12,
    longestStreak: 28,
    creditsBalance: 450,
    achievements: [
      {
        title: '30-Day Streak',
        icon: '🔥',
        date: new Date('2024-11-10'),
        description: 'Practiced for 30 consecutive days'
      },
      {
        title: 'Early Bird',
        icon: '🌅',
        date: new Date('2024-10-05'),
        description: 'Completed 10 morning sessions'
      },
      {
        title: 'Conversation Master',
        icon: '💬',
        date: new Date('2024-09-20'),
        description: 'Completed 50 conversation practices'
      },
      {
        title: 'Grammar Expert',
        icon: '📝',
        date: new Date('2024-08-15'),
        description: 'Scored 100% in grammar assessment'
      }
    ],
    recentActivity: [
      {
        type: 'Practice',
        description: 'Completed Business English Module 3',
        date: new Date('2024-12-16'),
        duration: 45
      },
      {
        type: 'Live Session',
        description: 'Joined "Conversation Practice" session',
        date: new Date('2024-12-15'),
        duration: 60
      },
      {
        type: 'Achievement',
        description: 'Earned "12-Day Streak" badge',
        date: new Date('2024-12-14')
      },
      {
        type: 'VR Practice',
        description: 'Practiced in Airport Check-in scenario',
        date: new Date('2024-12-13'),
        duration: 30
      }
    ]
  };

  memberSince: string = '';
  practiceHours: number = 0;
  practiceMinutes: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calculateMemberSince();
    this.calculatePracticeTime();
  }

  calculateMemberSince(): void {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[this.user.joinedDate.getMonth()];
    const year = this.user.joinedDate.getFullYear();
    this.memberSince = `${month} ${year}`;
  }

  calculatePracticeTime(): void {
    this.practiceHours = Math.floor(this.user.totalPracticeTime / 60);
    this.practiceMinutes = this.user.totalPracticeTime % 60;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  editProfile(): void {
    // TODO: Implement edit profile functionality
    console.log('Edit profile clicked');
  }

  getLevelColor(): string {
    switch (this.user.level) {
      case 'Beginner': return '#06B6D4';
      case 'Intermediate': return '#0B6EFF';
      case 'Advanced': return '#00C28A';
      default: return '#0B6EFF';
    }
  }

  getLevelProgress(): number {
    switch (this.user.level) {
      case 'Beginner': return 33;
      case 'Intermediate': return 66;
      case 'Advanced': return 100;
      default: return 0;
    }
  }
}