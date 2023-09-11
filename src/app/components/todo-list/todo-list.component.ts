import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.interface';
import { TodoFilter } from 'src/app/models/todo.type';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];
  filter: TodoFilter = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.listTodos();
    });
  }

  addTodo(newTodo: TodoItem): void {
    this.todoService.addTodo(newTodo).subscribe(() => {
      this.listTodos();
    });
  }

  toggleCompleteTodo(editTodo: TodoItem): void {
    this.todoService.toggleCompleteTodo(editTodo).subscribe(() => {
      this.listTodos();
    });
  }

  filterTodos(filter: TodoFilter): void {
    this.filter = filter;
  }

  get filteredTodos(): TodoItem[] {
    return this.filterByState[this.filter](this.todos);
  }

  private filterByState = {
    all: (todos: TodoItem[]) => {
      const pendingTodos = todos.filter((todo) => !todo.completed);
      const completedTodos = todos.filter((todo) => todo.completed);
      return [...pendingTodos, ...completedTodos];
    },
    completed: (todos: TodoItem[]) => todos.filter((todo) => todo.completed),
    pending: (todos: TodoItem[]) => todos.filter((todo) => !todo.completed),
  };
}
