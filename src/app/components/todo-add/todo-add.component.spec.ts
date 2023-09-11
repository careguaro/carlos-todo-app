import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { FormsModule } from '@angular/forms';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoAddComponent]
    });
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add todo', () => {
    const spy = spyOn(component.add, 'emit');
    const text = 'test';
    component.newTodoText = text;
    component.addTodo();
    expect(spy).toHaveBeenCalledOnceWith({
      id: 'ABC',
      text,
      completed: false
    });
    expect(component.newTodoText).toBe('');
  });

  it('should do not add if input text es', () => {
    const spy = spyOn(component.add, 'emit');
    component.newTodoText = '';
    component.addTodo();
    expect(spy).not.toHaveBeenCalled();
  });
});
