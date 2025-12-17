import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

interface Module360 {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

@Component({ 
  selector: 'app-module360-page', 
  templateUrl: './module360-page.component.html', 
  styleUrls: ['./module360-page.component.css'],
  standalone: false
})
export class Module360PageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('viewer360', { static: false }) viewer360Ref!: ElementRef<HTMLDivElement>;
  
  modules: Module360[] = [];
  selectedModule: Module360 | null = null;
  isLoading = false;
  viewerInitialized = false;
  
  // Panolens/Three.js instances
  private viewer: any;
  private panorama: any;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['/courses']);
  }

  ngOnInit(): void {
    // Load 360 modules from mock data
    this.loadModules();
  }

  ngAfterViewInit(): void {
    // Initialize viewer only in browser environment
    if (isPlatformBrowser(this.platformId) && this.modules.length > 0) {
      // Auto-select first module
      this.selectModule(this.modules[0]);
    }
  }

  ngOnDestroy(): void {
    this.cleanup360Viewer();
  }

  private loadModules(): void {
    // Mock 360 modules with YouTube 360 video IDs
    this.modules = [
      {
        id: '1',
        title: 'Airport Scenario',
        description: 'Practice English at the airport - Check-in, Security, and Boarding',
        videoId: 'IArd6ZadFJ4',
        thumbnail: 'https://img.youtube.com/vi/IArd6ZadFJ4/maxresdefault.jpg',
        duration: '5:30',
        difficulty: 'beginner'
      },
      {
        id: '2',
        title: 'Restaurant Experience',
        description: 'Learn restaurant vocabulary and ordering food in English',
        videoId: 'yRM4wsXQ5KI',
        thumbnail: 'https://img.youtube.com/vi/yRM4wsXQ5KI/maxresdefault.jpg',
        duration: '6:15',
        difficulty: 'intermediate'
      },
      {
        id: '3',
        title: 'Business Meeting',
        description: 'Professional English in a corporate environment',
        videoId: '_ldiu5OiA9g',
        thumbnail: 'https://img.youtube.com/vi/_ldiu5OiA9g/maxresdefault.jpg',
        duration: '7:45',
        difficulty: 'advanced'
      }
    ];
  }

  selectModule(module: Module360): void {
    if (this.selectedModule?.id === module.id) return;
    
    this.selectedModule = module;
    this.isLoading = true;
    
    // Cleanup previous viewer
    this.cleanup360Viewer();
    
    // Initialize new viewer with selected module
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.init360Viewer(), 100);
    }
  }

  private async init360Viewer(): Promise<void> {
    if (!this.viewer360Ref) return;

    try {
      // Dynamically import Panolens and Three.js (code splitting)
      const [PANOLENS, THREE] = await Promise.all([
        import('panolens'),
        import('three')
      ]);

      const container = this.viewer360Ref.nativeElement;
      
      // Create viewer
      this.viewer = new PANOLENS.Viewer({
        container: container,
        controlBar: true,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        output: 'console'
      });

      // Create 360 video panorama using YouTube video
      // Note: YouTube doesn't allow direct embedding of 360 videos in Panolens
      // We'll use YouTube iframe API instead
      this.initYouTube360Player();
      
      this.viewerInitialized = true;
      this.isLoading = false;
    } catch (error) {
      console.error('Error initializing 360 viewer:', error);
      // Fallback to YouTube iframe
      this.initYouTube360Player();
      this.isLoading = false;
    }
  }

  private initYouTube360Player(): void {
    if (!this.viewer360Ref || !this.selectedModule) return;

    const container = this.viewer360Ref.nativeElement;
    container.innerHTML = `
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${this.selectedModule.videoId}?autoplay=0&rel=0&modestbranding=1"
        title="${this.selectedModule.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 12px;"
      ></iframe>
    `;
  }

  private cleanup360Viewer(): void {
    if (this.viewer) {
      this.viewer.dispose();
      this.viewer = null;
    }
    if (this.panorama) {
      this.panorama.dispose();
      this.panorama = null;
    }
    this.viewerInitialized = false;
  }

  getDifficultyColor(difficulty: string): string {
    const colors = {
      'beginner': '#00C28A',
      'intermediate': '#FFB800',
      'advanced': '#FF6B6B'
    };
    return colors[difficulty as keyof typeof colors] || '#9aa6b2';
  }
}
