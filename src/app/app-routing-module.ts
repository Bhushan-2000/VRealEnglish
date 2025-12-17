import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'module360', loadChildren: () => import('./features/module360/module360.module').then(m => m.Module360Module) },
  { path: 'live', loadChildren: () => import('./features/live/live.module').then(m => m.LiveModule) },
  { path: 'learning', loadChildren: () => import('./features/learning/learning.module').then(m => m.LearningModule) },
  { path: 'community', loadChildren: () => import('./features/community/community.module').then(m => m.CommunityModule) },
  { path: 'rooms', loadChildren: () => import('./features/rooms/rooms.module').then(m => m.RoomsModule), canActivate: [AuthGuard] },
  { path: 'ai-coach', loadChildren: () => import('./features/ai-coach/ai-coach.module').then(m => m.AiCoachModule), canActivate: [AuthGuard] },
  { path: 'wallet', loadChildren: () => import('./features/wallet/wallet.module').then(m => m.WalletModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard] },
  { path: '**', loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
