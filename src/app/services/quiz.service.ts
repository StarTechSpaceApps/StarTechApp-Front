import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';


const API_URL = 'https://startechapp-back-production.up.railway.app/';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public questions: Question [] = [];

  constructor(private httpClient: HttpClient) { }

  //método listar id
  getListId(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${API_URL}list`);
  }

  //método para obtener pregunta por id
  getQuestionById(id: string): Observable<Question> {
    return this.httpClient.get<Question>(`${API_URL}question/${id}`);
  }







}
