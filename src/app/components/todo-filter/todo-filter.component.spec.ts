import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterComponent } from './todo-filter.component';

describe('TodoFilterComponent', () => {
  let component: TodoFilterComponent;
  let fixture: ComponentFixture<TodoFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFilterComponent]
    });
    fixture = TestBed.createComponent(TodoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter', () => {
    component.todos = [
      {
        id: 'ABC',
        text: 'test1',
        completed: false
      },
      {
        id: 'XYZ',
        text: 'test2',
        completed: false
      },
      {
        id: 'EFG',
        text: 'test3',
        completed: true
      },
    ];
    const spy = spyOn(component.sendFilter, 'emit');
    component.filterTodos('all')
    expect(spy).toHaveBeenCalledWith(component.filter);
    expect(component.pendingCount).toBe(2);
    expect(component.itemsCount).toBe(3);
  });
});
