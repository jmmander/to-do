import { Injectable } from '@angular/core';
import { Todo, priority } from '../classes/todo';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number

  constructor() { 
    this.todos = [
      new Todo(0,"test 1", "high", null, false),
      new Todo(1,"test 1", "medium", null, false),
      new Todo(2,"test 1", "low", null, false),
      
    ];
    this.nextId = 3;


  }

  getTodos(): Observable<Todo[]> {
    console.log("service", this.todos);
    return of(this.todos);
  }

  addTodo(todoText: string, todoPriority: priority, todoDueDate: Date, todoComplete: boolean): void {
    let todo = new Todo(this.nextId, todoText, todoPriority, todoDueDate, todoComplete);
    this.todos.push(todo);
    console.log("adding to todos")
    console.log(this.todos)
    this.nextId++;
  }

  removeTodo(todo: Todo) : void {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }


  updateTodo(todo: Todo, field: string, updated: any) : void {
  }

  }

