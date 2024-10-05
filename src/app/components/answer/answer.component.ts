import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {

  activeModal  = inject(NgbActiveModal);
  router = inject(Router);

  closeModal() {
    this.activeModal.close();
  }

}
