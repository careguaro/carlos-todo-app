import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TodoItem } from '../models/todo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = environment.base + '/api/todos';
  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.url);
  }

  addTodo(todo: TodoItem): Observable<any> {
    return this.http.post<any>(this.url, todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  toggleCompleteTodo(todo: TodoItem): Observable<any> {
    return this.http.put<any>(`${this.url}/${todo.id}`, todo);
  }
}
