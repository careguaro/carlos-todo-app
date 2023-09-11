import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: TodoItem;
  @Output() delete = new EventEmitter<string>();
  @Output() toggleCompleted = new EventEmitter<TodoItem>();

  constructor() {}

  onDelete(): void {
    this.delete.emit(this.todo.id);
  }

  onToggleCompleted(): void {
    const editTodo = {
      ...this.todo,
      completed: !this.todo.completed
    }
    this.toggleCompleted.emit(editTodo);
  }
}
