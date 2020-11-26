import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() { }
}
