import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface Module360 {
  id: string;
  title: string;
  description: string;
  icon: string;
  scenario: string;
}

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  credits: number;
}

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}

@Component({ 
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html', 
  styleUrls: ['./home-page.component.css'],
  standalone: false
})
export class HomePageComponent implements OnInit {
  // Current year (bound in template instead of inline new Date() expression for SSR/template safety)
  year: number = new Date().getFullYear();
  features: Feature[] = [];
  courses: Course[] = [];
  stats: Stat[] = [];
  testimonials: any[] = [];
  modules360: Module360[] = [];
  pricingPlans: PricingPlan[] = [];
  faqs: FAQ[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadFeatures();
    this.loadCourses();
    this.loadStats();
    this.loadTestimonials();
    this.load360Modules();
    this.loadPricingPlans();
    this.loadFAQs();
    // Defer rolling number init to next frame to ensure DOM present (browser only)
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => this.initRollingNumbers());
    }
  }

  private loadFeatures(): void {
    this.features = [
      {
        icon: '🌐',
        title: '360° VR Learning',
        description: 'Immerse yourself in real-world English scenarios with our revolutionary 360° virtual reality modules. Experience airports, restaurants, and business meetings like never before.',
        color: '#6366F1'
      },
      {
        icon: '🤖',
        title: 'AI-Powered Coach',
        description: 'Get personalized feedback and guidance from our advanced AI coaching system. Improve pronunciation, grammar, and fluency with real-time corrections and suggestions.',
        color: '#06B6D4'
      },
      {
        icon: '👥',
        title: 'Live Classes',
        description: 'Join interactive live sessions with native English speakers and certified teachers. Practice conversation skills in small groups and get instant feedback.',
        color: '#10B981'
      },
      {
        icon: '🎯',
        title: 'Personalized Learning',
        description: 'Our adaptive algorithm creates custom learning paths based on your goals, level, and progress. Focus on what matters most to you - business, travel, or daily conversation.',
        color: '#8B5CF6'
      },
      {
        icon: '📊',
        title: 'Progress Tracking',
        description: 'Monitor your improvement with detailed analytics and insights. See your vocabulary growth, pronunciation accuracy, and fluency development over time.',
        color: '#F59E0B'
      },
      {
        icon: '🏆',
        title: 'Gamified Experience',
        description: 'Stay motivated with achievements, badges, and leaderboards. Compete with learners worldwide and celebrate your milestones as you progress.',
        color: '#EC4899'
      }
    ];
  }

  private loadCourses(): void {
    this.courses = [
      {
        id: '1',
        title: 'Business English Mastery',
        level: 'Intermediate',
        duration: '12 weeks',
        students: 15420,
        rating: 4.8,
        image: 'brand/course-business.jpg',
        description: 'Master professional communication for meetings, presentations, and negotiations.'
      },
      {
        id: '2',
        title: 'Everyday Conversation',
        level: 'Beginner',
        duration: '8 weeks',
        students: 28350,
        rating: 4.9,
        image: 'brand/course-conversation.jpg',
        description: 'Build confidence in daily English conversations and social interactions.'
      },
      {
        id: '3',
        title: 'IELTS Preparation',
        level: 'Advanced',
        duration: '16 weeks',
        students: 12680,
        rating: 4.7,
        image: 'brand/course-ielts.jpg',
        description: 'Comprehensive preparation for all four IELTS modules with expert strategies.'
      }
    ];
  }

  private loadStats(): void {
    this.stats = [
      { value: '50,000+', label: 'Active Students', icon: '👨‍🎓' },
      { value: '95%', label: 'Success Rate', icon: '✅' },
      { value: '200+', label: 'Expert Teachers', icon: '👩‍🏫' },
      { value: '4.9/5', label: 'Average Rating', icon: '⭐' }
    ];
  }

  private loadTestimonials(): void {
    this.testimonials = [
      {
        name: 'Sarah Johnson',
        role: 'Marketing Manager',
        company: 'Tech Corp',
        image: 'avatars/user1.jpg',
        rating: 5,
        text: 'VReal English transformed my business communication skills. The 360° VR scenarios made me feel like I was actually in real meetings. Highly recommended!'
      },
      {
        name: 'Miguel Rodriguez',
        role: 'Software Engineer',
        company: 'Innovation Labs',
        image: 'avatars/user2.jpg',
        rating: 5,
        text: 'The AI coach is incredible! It helped me improve my pronunciation and gave me instant feedback. I passed my IELTS with band 8 thanks to VReal English.'
      },
      {
        name: 'Yuki Tanaka',
        role: 'Student',
        company: 'University of Tokyo',
        image: 'avatars/user3.jpg',
        rating: 5,
        text: 'Learning English has never been this fun! The gamification keeps me motivated, and the live classes with native speakers boosted my confidence tremendously.'
      }
    ];
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private load360Modules(): void {
    this.modules360 = [
      {
        id: '1',
        title: 'Airport Navigation',
        description: 'Master English for international travel - from check-in to boarding',
        icon: '✈️',
        scenario: 'Travel & Tourism'
      },
      {
        id: '2',
        title: 'Restaurant Experience',
        description: 'Order food, make reservations, and interact with service staff confidently',
        icon: '🍽️',
        scenario: 'Dining & Hospitality'
      },
      {
        id: '3',
        title: 'Business Meeting',
        description: 'Participate effectively in corporate meetings and presentations',
        icon: '💼',
        scenario: 'Professional Communication'
      },
      {
        id: '4',
        title: 'Shopping & Retail',
        description: 'Navigate stores, negotiate prices, and handle customer service situations',
        icon: '🛍️',
        scenario: 'Retail & Commerce'
      }
    ];
  }

  private loadPricingPlans(): void {
    this.pricingPlans = [
      {
        name: 'Basic',
        price: 29,
        period: 'month',
        credits: 100,
        features: [
          'Access to 50+ courses',
          '5 VR modules',
          'Basic AI coach',
          'Community forum',
          'Mobile app access'
        ]
      },
      {
        name: 'Professional',
        price: 59,
        period: 'month',
        credits: 300,
        popular: true,
        features: [
          'Unlimited course access',
          'All VR modules',
          'Advanced AI coach',
          '10 live sessions/month',
          'Virtual room access',
          'Progress analytics',
          'Completion certificates'
        ]
      },
      {
        name: 'Enterprise',
        price: 99,
        period: 'month',
        credits: 1000,
        features: [
          'Everything in Professional',
          'Unlimited live sessions',
          'Personal mentor',
          'Custom learning paths',
          '24/7 priority support',
          'Team collaboration',
          'Advanced reporting'
        ]
      }
    ];
  }

  private loadFAQs(): void {
    this.faqs = [
      {
        question: 'What makes VReal English different from other platforms?',
        answer: 'We combine cutting-edge VR technology, AI-powered coaching, and live interaction with native speakers to create an immersive learning experience that simulates real-world English usage. Our 360° modules place you directly in realistic scenarios.',
        open: false
      },
      {
        question: 'Do I need VR equipment to use the platform?',
        answer: 'No, VR equipment is optional. Our 360° modules work perfectly on any device - desktop, tablet, or mobile. VR headsets enhance the experience but are not required.',
        open: false
      },
      {
        question: 'How does the AI coach work?',
        answer: 'Our AI coach uses advanced natural language processing to analyze your speech, writing, and comprehension. It provides real-time feedback, identifies areas for improvement, and creates personalized learning paths based on your progress.',
        open: false
      },
      {
        question: 'Can I get a certificate after completing courses?',
        answer: 'Yes! Upon completing courses in our Professional and Enterprise plans, you receive internationally recognized certificates that can be shared on LinkedIn and added to your professional portfolio.',
        open: false
      },
      {
        question: 'How does the wallet credit system work?',
        answer: 'Credits are non-withdrawable digital currency used within the platform. Use credits to book live sessions, unlock premium content, or purchase course bundles. Credits cannot be converted to cash but can be used for any platform service.',
        open: false
      },
      {
        question: 'What if I\'m not satisfied with my subscription?',
        answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied with your learning experience, contact our support team for a full refund.',
        open: false
      }
    ];
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  startModule(moduleId: string): void {
    this.router.navigate(['/module360'], { queryParams: { module: moduleId } });
  }

  selectPlan(planName: string): void {
    console.log('Selected plan:', planName);
    // Handle plan selection - navigate to payment or registration
  }

  viewCourse(courseId: string): void {
    this.router.navigate(['/courses'], { queryParams: { course: courseId } });
  }

  /* =====================================================
     Rolling Number Animation (digit wheel style)
     Looks for elements with [data-roll-target="NNN"] and builds digit columns
     Accessible: original value stored in aria-label, fallback on reduced motion
     ===================================================== */
  private initRollingNumbers(): void {
    if (typeof window === 'undefined') return; // SSR safety
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-roll-target]');
    elements.forEach(el => {
      const rawTarget = el.getAttribute('data-roll-target');
      if (!rawTarget) return;
      const sanitized = rawTarget.replace(/[^0-9+%]/g, '');
      const digits = sanitized.split('');
      el.setAttribute('aria-label', rawTarget);
      el.classList.add('rolling-number');
      el.innerHTML = ''; // clear existing text
      digits.forEach((d, index) => {
        if (!/\d/.test(d)) {
          // Non-digit characters (+, %, /) inserted directly
          const span = document.createElement('span');
          span.textContent = d;
          span.className = 'rolling-static';
          el.appendChild(span);
          return;
        }
        const col = document.createElement('span');
        col.className = 'digit-column';
        // Build digit stack 0-9 plus repeat 0 for seamless loop
        for (let i = 0; i <= 10; i++) {
          const digit = document.createElement('span');
          digit.className = 'digit-cell';
          digit.textContent = (i === 10 ? '0' : i.toString());
          col.appendChild(digit);
        }
        el.appendChild(col);
        if (prefersReduced) {
          // Set directly
          col.style.transform = `translateY(-${parseInt(d,10)*100}%)`;
        } else {
          // Animate after stagger
          const targetOffset = parseInt(d, 10) * 55; // 55px cell height from reference design
          setTimeout(() => {
            col.style.transition = 'transform 1.2s cubic-bezier(.25,.9,.35,1.02)';
            col.style.transform = `translateY(-${targetOffset}px)`;
          }, 150 * index);
        }
      });
    });
  }
}