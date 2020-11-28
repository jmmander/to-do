import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number
  completeTodos: Todo[];

  constructor() { 
    this.todos = [
      new Todo(0, "first todo"),
      new Todo(1, "second todo"),
      new Todo(2, "third todo")
    ];

    this.nextId = 3;

    this.completeTodos = [];
  }

  addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getComplete(): Todo[] {
    return this.completeTodos;
  }

  addComplete(todo: Todo) {
    this.completeTodos.push(todo);
  }

  removeTodo(todo: Todo, listname: string) : void {
    if (listname === "incomplete") {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    } else {
      var index = this.completeTodos.indexOf(todo);
      this.todos.splice(index, 1);
    }
    
  };

  removeComplete(todo: Todo) : void {
    var index = this.completeTodos.indexOf(todo);
    this.completeTodos.splice(index, 1)
  }
  }

