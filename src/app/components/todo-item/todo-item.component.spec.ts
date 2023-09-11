import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TodoItemComponent } from './todo-item.component';
import { FormsModule } from '@angular/forms';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoItemComponent],
    });
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 'test',
      text: 'test',
      completed: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit deleted item by id', () => {
    const spy = spyOn(component.delete, 'emit');
    component.onDelete();
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should emit todo with completed value toggled', () => {
    const spy = spyOn(component.toggleCompleted, 'emit');
    component.onToggleCompleted();
    expect(spy).toHaveBeenCalledWith({
      ...component.todo,
      completed: true,
    });
  });
});
