import { Component, OnInit } from '@angular/core';
import { Todo } from './models.ts/todo';
import { TodosService } from './services/todos.services';

// import { todos as data } from './data/data';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular todo list app';

  // todos: Todo[] = data;
  todos: Todo[] = [];

  constructor(private TodosService: TodosService) {}

  ngOnInit(): void {
    this.TodosService.getAll().subscribe({
      next: (todos) => (this.todos = todos),
    });
  }

  addItem(title: string) {
    if (title) {
      this.todos.unshift({
        title,
        userId: 0,
        id: uuidv4(),
        completed: false,
      });
      title = '';
    }
  }
  toggleDisabled(id: Todo['id']) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => item.id != todo.id);
  }
}
