import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from './answer/answer.component';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {

  config = inject(NgbModalConfig);
  quizService = inject(QuizService);

  idList: string[] = [];
  selectedId: string = '';
  questions: Question[] = [];
  usedIds: string[] = [];

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
      let randomIndex;
      let selectedId;

      // Buscar un ID que no haya sido usado
      do {
        randomIndex = Math.floor(Math.random() * this.idList.length);
        selectedId = this.idList[randomIndex];
      } while (this.usedIds.includes(selectedId) && this.usedIds.length < this.idList.length);

      // Si todos los IDs han sido usados, reiniciar el array de IDs usados
      if (this.usedIds.length >= this.idList.length) {
        this.usedIds = [];
      }

      this.selectedId = selectedId;
      console.log('ID seleccionado:', this.selectedId);
      this.getQuestionById(this.selectedId);
      this.usedIds.push(this.selectedId); // Añadir el ID al array de IDs usados
    } else {
      console.log('No hay más IDs disponibles.');
    }
  }



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

  showAnswer(selectedId: string): void {
    setTimeout(() => {
    const modalRef = this.modalService.open(AnswerComponent,  { centered: true,  backdrop: 'static' });
    modalRef.componentInstance.selectedId = selectedId;
    modalRef.result.then((result) => {
      this.router.navigate(['/question', selectedId]);
    });
    }, 1000);
  }

  handleButtonRed(event: Event): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.style.borderColor = 'red';
  }
  handleButtonGreen(event: Event): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.borderColor = 'green';
  }

}
