import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models.ts/todo';
import { delay, Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=3'
    );
  }

  // createTodo(todo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(
  //     'https://jsonplaceholder.typicode.com/todos?_limit=3',
  //     todo
  //   );
  // }
}
