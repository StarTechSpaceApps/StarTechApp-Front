import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Star Tech Space App',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'quiz',
    title: 'quiz',
    loadComponent: () => import('./components/quiz/quiz.component').then(c => c.QuizComponent),

  },
  {
    path: 'quiz/:id',
    title: 'answer',
    loadComponent: () => import('./components/answer/answer.component').then(c => c.AnswerComponent),

  },
];
