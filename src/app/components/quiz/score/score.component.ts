import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() highScore: number = 0;
  @Input() lives: number = 0;
}
