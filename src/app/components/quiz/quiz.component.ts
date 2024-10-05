import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { config } from '../../app.config.server';
import { AnswerComponent } from '../answer/answer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  modalService = inject(NgbModal);
  config = inject(NgbModalConfig);
  router = inject(Router);


  //método para listar preguntas

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
