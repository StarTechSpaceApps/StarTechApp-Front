import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';


const API_URL = 'http://localhost:3001/';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public questions: Question [] = [];

  constructor(private httpClient: HttpClient) { }

  //método listar preguntas
  getListQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${API_URL}list`);
  }

  //método para obtener pregunta por id
  getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${API_URL}question/${id}`);
  }







}
