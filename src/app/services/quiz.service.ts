import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/questions.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public question: Question[] = [];
  public hhtpClient = Inject(HttpClient);
  //añadir url desde environment

  //getListQuestions(): Observable<Question[]> {}

  //getQuestionById(id: number): Observable<Question> {}

}
