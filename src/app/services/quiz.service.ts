import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { environment } from '../../environments/environment.development';

const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public question: Question[] = [];
  public httpClient = inject(HttpClient);

  getRandomQuestion(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${endpoint}questions/random`);
  }

  //getQuestionById(id: number): Observable<Question> {}

}
