import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoServiceMock } from 'src/app/services/todo.service.mock';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TODOS_MOCK } from 'src/app/mocks/todos.mock';
import { TodoService } from 'src/app/services/todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoServiceMock.getProvider()],
      declarations: [TodoListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    todoService = TestBed.inject<any>(TodoService);
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.todos).toEqual(TODOS_MOCK);
  });

  it('should deleteTodo', () => {
    const spy = spyOn(component, 'listTodos');
    component.deleteTodo('ABC');
    expect(todoService.deleteTodo).toHaveBeenCalledOnceWith('ABC');
    expect(spy).toHaveBeenCalled();
  });

  it('should addTodo', () => {
    const spy = spyOn(component, 'listTodos');
    component.addTodo(TODOS_MOCK[0]);
    expect(todoService.addTodo).toHaveBeenCalledOnceWith(TODOS_MOCK[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should toggleCompleteTodo', () => {
    const spy = spyOn(component, 'listTodos');
    component.toggleCompleteTodo(TODOS_MOCK[0]);
    expect(todoService.toggleCompleteTodo).toHaveBeenCalledOnceWith(
      TODOS_MOCK[0]
    );
    expect(spy).toHaveBeenCalled();
  });

  it('should items be shown at the end of the list', () => {
    const filter = 'all';
    component.filterTodos(filter);
    expect(component.filter).toBe(filter);
    expect(component.filteredTodos.length).toBe(6);
    expect(component.filteredTodos).toEqual([
      TODOS_MOCK[1],
      TODOS_MOCK[3],
      TODOS_MOCK[4],
      TODOS_MOCK[5],
      TODOS_MOCK[0],
      TODOS_MOCK[2],
    ]);
  });

  it('should filterTodo with [completed] value', () => {
    const filter = 'completed';
    component.filterTodos(filter);
    expect(component.filter).toBe(filter);
    expect(component.filteredTodos.length).toBe(2);
  });

  it('should filterTodo with [all] value', () => {
    const filter = 'pending';
    component.filterTodos(filter);
    expect(component.filter).toBe(filter);
    expect(component.filteredTodos.length).toBe(4);
  });
});
