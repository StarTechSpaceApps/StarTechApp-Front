import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from './answer/answer.component';
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
export class QuizComponent implements OnInit {

  config = inject(NgbModalConfig);
  quizService = inject(QuizService);

  idList: string[] = [];
  selectedId: string = '';
  questions: Question[] = [];
  score: number = 0;
  highScore: number = 100; // Ejemplo de valor
  lives: number = 3;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {}


  ngOnInit() {
    this.getIds();
  }


  getIds():void{
    this.quizService.getListId().subscribe(
      (data: string[]) => {
        this.idList = data;
        console.log('Preguntas:', this.idList);
        this.selectedRandomId();
      },
      (error) => {
        console.error('Error al obtener las preguntas:', error); // Manejo de errores
      }
    );
  }

  selectedRandomId(): void {
    if (this.idList.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.idList.length);
      this.selectedId = this.idList[randomIndex];
      console.log('ID seleccionado:', this.selectedId);
      this.getQuestionById(this.selectedId);
    }
  }

  //método para obtener pregunta por id
  getQuestionById(id: string): void {
    this.quizService.getQuestionById(id).subscribe(
      (data: Question) => {
        this.questions.push(data);
        console.log('Pregunta:', data);
      },
      (error) => {
        console.error('Error al obtener la pregunta:', error); // Manejo de errores
      }
    );
  }

  //método para mostrar orden aleatorio de botones

  // Método para abrir el modal y pasar el ID
  showAnswer(selectedId: string): void {
    const modalRef = this.modalService.open(AnswerComponent);
    modalRef.componentInstance.selectedId = selectedId; // Pasa el selectedId al componente hijo
    modalRef.result.then((result) => {
      this.router.navigate(['/question', selectedId]);
    });

  }

}
