import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { config } from '../../app.config.server';
import { AnswerComponent } from '../answer/answer.component';
import { ScoreComponent } from '../quiz/score/score.component';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule, ScoreComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  modalService = inject(NgbModal);
  config = inject(NgbModalConfig);
  router = inject(Router);
  quizService = inject(QuizService);

  question: Question[] = [];
  score: number = 0;
  highScore: number = 100; // Ejemplo de valor
  lives: number = 3;



  //método para obtener pregunta random
/*   getRandomQuestion() {
    this.quizService.getRandomQuestion().subscribe(
      (data: Question[]) => {
        this.question = data;
      },
      (error) => {
        console.log(error);
      }
    );
  } */

  //método para listar preguntas por id

  //método para mostrar orden aleatorio de botones

 //Pdt backend
 /*  showAnswer(questionId: number) {
    this.modalService.open(AnswerComponent).result.then((result) => {
      this.router.navigate(['/quiz', questionId]);
    });
  } */

    //version harcoded
    showAnswer() {
      this.modalService.open(AnswerComponent)
    }
}
