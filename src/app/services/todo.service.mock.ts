import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { of } from 'rxjs';
import { TODOS_MOCK } from '../mocks/todos.mock';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceMock {
  static getProvider() {
    return {
      provide: TodoService,
      useFactory: () => TodoServiceMock.instance(),
    };
  }

  static instance() {
    const instance = jasmine.createSpyObj('TodoService', [
      'getTodos',
      'addTodo',
      'deleteTodo',
      'toggleCompleteTodo'
    ]);
    instance.getTodos.and.returnValue(of(TODOS_MOCK));
    instance.addTodo.and.returnValue(of({}));
    instance.deleteTodo.and.returnValue(of({}));
    instance.toggleCompleteTodo.and.returnValue(of({}));
    return instance;
  }
}
