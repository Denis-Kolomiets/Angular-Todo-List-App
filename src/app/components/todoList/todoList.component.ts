import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models.ts/todo';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css'],
})
export class TodoListComponent {
  @Input() todo: Todo;

  @Output() delete: EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }
}
