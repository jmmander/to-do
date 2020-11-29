import { Injectable } from '@angular/core';
import { Todo, priority } from '../classes/todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number

  constructor() { 
    this.todos = [];
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


  updateTodo(updatedText: string, id: number) : void {
    console.log("before")
    let index = this.todos.findIndex(todo => {todo.id === id});
    console.log(this.todos[index]) 
    this.todos[index].text = updatedText;
    console.log("after")
    console.log(this.todos[index]) 
  }


  }

