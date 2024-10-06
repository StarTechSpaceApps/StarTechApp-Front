import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuizService } from '../../../services/quiz.service';
import { Question } from '../../../models/question.model';


@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent implements OnInit {

  activeModal  = inject(NgbActiveModal);
  route = inject(ActivatedRoute);
  router = inject(Router);
  quizService = inject(QuizService);
  modalService = inject(NgbModal);

  questionId: string = '';
  answers: Question[] = [];
  @Input() selectedId: string = '';

  public ngOnInit(): void {
    this.showAnswerById(this.selectedId);
  }

  showAnswerById(id: any): void {
    this.quizService.getQuestionById(id).subscribe(
      (data: Question) => {
        this.answers.push(data);
        console.log('Pregunta:', this.answers);
      },
      (error) => {
        console.error('Error al obtener la pregunta:', error);
      }
    );
  }

  closeModal(): void {
    this.activeModal.close();
    window.location.reload();
  }

}
