import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Star Tech Space App',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),

  },
  {
    path: 'question',
    title: 'quiz',
    loadComponent: () => import('./components/quiz/quiz.component').then(c => c.QuizComponent),

  },
  {
    path: 'question/:id',
    title: 'answer',
    loadComponent: () => import('./components/quiz/answer/answer.component').then(c => c.AnswerComponent),

  },
];
