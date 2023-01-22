import { Component, OnInit } from '@angular/core';
import { Todo } from './models.ts/todo';
import { TodosService } from './services/todos.services';

// import { todos as data } from './data/data';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

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
    this.todos.unshift({
      title,
      userId: 0,
      id: uuidv4(),
      completed: false,
    });
    title = '';
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => item.id != todo.id);
  }
}
