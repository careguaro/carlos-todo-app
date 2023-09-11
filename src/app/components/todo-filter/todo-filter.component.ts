import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.interface';
import { TodoFilter } from 'src/app/models/todo.type';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent {
  filter: TodoFilter = 'all';
  @Input() todos: TodoItem[] = [];
  @Output() sendFilter = new EventEmitter<TodoFilter>();

  filterTodos(filter: TodoFilter) {
    this.filter = filter;
    this.sendFilter.emit(filter);
  }

  get pendingCount(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  get itemsCount(): number {
    return this.todos.length;
  }
}
