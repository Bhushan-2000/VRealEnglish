# VReal English - 360° Immersive English Learning Platform

<div align="center">
  
  [![Angular](https://img.shields.io/badge/Angular-20.3.0-DD0031?logo=angular)](https://angular.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 🌟 Overview

VReal English is a cutting-edge English learning platform that combines **360° VR technology**, **AI coaching**, **live sessions**, and **virtual classrooms** to create an immersive language learning experience. Built with Angular 20's latest features including SSR (Server-Side Rendering) and zoneless change detection.

## ✨ Key Features

### 🎯 Core Learning Features
- **360° VR Modules** - Immersive real-world scenarios (Airport, Restaurant, Business Meetings)
- **Live Sessions** - Interactive classes with native speakers
- **AI Coach** - Personalized learning with AI-powered feedback
- **Virtual Rooms** - Collaborative learning spaces with real-time communication
- **Video Recording** - Practice and review your speaking skills

### 💎 Platform Features
- **Wallet System** - Non-withdrawable credits for subscriptions and course purchases
- **Progressive Learning** - Courses organized by difficulty levels (Beginner → Advanced)
- **Admin Dashboard** - Comprehensive management interface
- **User Profiles** - Track progress and achievements
- **Lazy Loading** - Optimized performance with code splitting
- **SSR Support** - Server-side rendering for improved SEO and performance

## 🏗️ Architecture

### Technology Stack
```
Angular 20.3.0          - Frontend framework with latest features
TypeScript 5.7          - Type-safe development
RxJS 7.8.0             - Reactive programming
Three.js + Panolens    - 360° VR rendering
Express 5.1.0          - SSR server
```

### Project Structure
```
vreal-english/
├── src/
│   ├── app/
│   │   ├── core/              # Core services, guards, interceptors
│   │   ├── shared/            # Shared components (Navbar, VideoPlayer)
│   │   ├── features/          # Lazy-loaded feature modules
│   │   │   ├── home/
│   │   │   ├── courses/
│   │   │   ├── module360/     # 360° VR viewer
│   │   │   ├── live/
│   │   │   ├── rooms/
│   │   │   ├── ai-coach/
│   │   │   ├── wallet/
│   │   │   ├── profile/
│   │   │   ├── admin/
│   │   │   └── not-found/
│   │   └── app-routing-module.ts
│   ├── assets/
│   │   ├── css/               # Global styles
│   │   ├── mock-data/         # Development data
│   │   └── brand/             # Logo and images
│   └── types/                 # TypeScript declarations
├── server.ts                  # SSR server configuration
└── angular.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open in browser**
   ```
   http://localhost:4200
   ```

### Available Scripts

```bash
npm start              # Start development server
npm run build          # Build for production
npm run build:ssr      # Build with SSR
npm test               # Run unit tests
```

## 🎨 Design System

### Brand Colors
```css
--brand-primary: #0B6EFF    /* Primary Blue */
--brand-accent: #00C28A     /* Accent Green */
--bg: #0f1724              /* Dark Background */
--surface: #0b1220         /* Surface Dark */
--text: #e8edf4            /* Text Light */
```

### Responsive Breakpoints
- Mobile: ≤ 600px
- Tablet: 601px - 992px
- Desktop: > 992px

## 🔐 Authentication

### Demo Accounts

**Admin Account**
- Email: admin@vrealentish.com
- Password: any

**User Account**
- Email: user@example.com
- Password: any

*Note: Mock authentication for demonstration only*

## 💰 Wallet System

- **Non-withdrawable** credits
- Used for: Subscriptions, course purchases, live sessions
- New users receive 100 welcome credits
- Top-up via mock payment integration

## 🎥 360° VR Modules

### Included Scenarios
1. **Airport Scenario** - Check-in, Security, Boarding (Beginner)
2. **Restaurant Experience** - Ordering food (Intermediate)
3. **Business Meeting** - Professional English (Advanced)

To replace videos, update `Module360PageComponent` with your YouTube 360° video IDs.

## ♿ Accessibility (WCAG AA Compliant)

- ✅ Full keyboard navigation
- ✅ Screen reader support with ARIA labels
- ✅ Focus indicators
- ✅ Skip to main content link
- ✅ High contrast support
- ✅ Reduced motion support

## 📱 Responsive Design

Mobile-first approach with:
- Touch-friendly interactions
- Adaptive layouts
- Optimized video players

## 🚢 Production Build

```bash
# Standard build
npm run build

# SSR build
npm run build:ssr
npm run serve:ssr:vreal-english
```

## 📊 Performance

### Bundle Sizes
- Initial: ~56KB
- Lazy chunks: 5-27KB each
- SSR enabled
- Zoneless change detection

### Target Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- SEO: 100

## 🐛 Troubleshooting

**SSR localStorage errors**: Use `isPlatformBrowser` check before accessing browser APIs

**TypeScript module errors**: These are language server errors; Angular compiler resolves them

**360 viewer issues**: Falls back to YouTube iframe automatically

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push and open PR

## 📄 License

MIT License - See LICENSE file

---

<div align="center">
  <p>Built with ❤️ using Angular 20</p>
  <p>© 2024 VReal English</p>
</div>


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
