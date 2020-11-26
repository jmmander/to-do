import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number

  constructor() { 
    this.todos = [
      new Todo(0, "first todo"),
      new Todo(1, "second todo"),
      new Todo(2, "third todo")
    ];

    this.nextId = 3;
  }

  addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  removeTodo(todo: Todo) : void {
    console.log(todo);
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  };
  }

