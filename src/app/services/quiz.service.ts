import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

//añadir url desde environment

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public question: Question[] = [];
  public hhtpClient = Inject(HttpClient);


  //getListQuestions(): Observable<Question[]> {}

  //getQuestionById(id: number): Observable<Question> {}

}
