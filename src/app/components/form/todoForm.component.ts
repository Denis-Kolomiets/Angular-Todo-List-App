import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.services';

@Component({
  selector: 'app-todoForm',
  templateUrl: './todoForm.component.html',
  styleUrls: ['./todoForm.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodosService) {}
  ngOnInit(): void {}

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(newItem: HTMLInputElement) {
    // this.todoService.createTodo({
    //   title: value,
    //   userId: 0,
    //   id: uuidv4(),
    //   completed: false
    // })
    this.newItemEvent.emit(newItem.value);
    newItem.value = '';
  }
}
