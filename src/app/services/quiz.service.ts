import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { environment } from '../../environments/environment.development';

const API_URL = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public questions: Question [] = [];

  constructor(private httpClient: HttpClient) { }

  //método listar preguntas
  getListQuestions(): Observable<string> {
    return this.httpClient.get<string>(`${API_URL}`);
  }







}
