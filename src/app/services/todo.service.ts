import { Injectable } from '@angular/core';
import { Todo, priority } from '../classes/todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number

  constructor() { 
    this.todos = [
      new Todo(0,"test 1", "high", null, false),
      new Todo(1,"test 2", "medium", new Date(), false),
      new Todo(1,"test 2", "low", new Date(), true)
    ];
    this.nextId = 0;


  }

  getTodos(): Todo[] {
    return this.todos;
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

