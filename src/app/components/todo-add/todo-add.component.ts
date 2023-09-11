import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  @Output() add = new EventEmitter<TodoItem>();
  constructor() {}
  newTodoText: string = '';

  addTodo(): void {
    if (this.newTodoText.trim() === '') return;

    const newTodo: TodoItem = {
      id: 'ABC',
      text: this.newTodoText,
      completed: false,
    };

    this.newTodoText = '';
    this.add.emit(newTodo);
  }
}
