import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { TODOS_MOCK } from '../mocks/todos.mock';

const url = environment.base + '/api/todos';

describe('TodoService', () => {
  let service: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getTodos', () => {
    let result: any;
    service.getTodos().subscribe((todos) => {
      result = todos;
    });
    const req = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req.flush({});
    expect(result).toEqual({});
  });

  it('should be addTodo', () => {
    let result: any;
    service.addTodo(TODOS_MOCK[0]).subscribe((todos) => {
      result = todos;
    });
    const req = httpTestingController.expectOne({
      method: 'POST',
      url,
    });

    req.flush({});
    expect(result).toEqual({});
  });

  it('should be deleteTodo', () => {
    let result: any;
    service.deleteTodo(TODOS_MOCK[0].id).subscribe((todos) => {
      result = todos;
    });
    const req = httpTestingController.expectOne({
      method: 'DELETE',
      url: `${url}/${TODOS_MOCK[0].id}`
    });

    req.flush({});
    expect(result).toEqual({});
  });

  it('should be toggleCompleteTodo', () => {
    let result: any;
    service.toggleCompleteTodo(TODOS_MOCK[0]).subscribe((todos) => {
      result = todos;
    });
    const req = httpTestingController.expectOne({
      method: 'PUT',
      url: `${url}/${TODOS_MOCK[0].id}`,
    });

    req.flush({});
    expect(result).toEqual({});
  });
});
