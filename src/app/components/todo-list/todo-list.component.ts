import { Component, OnInit } from '@angular/core';
import {Todo} from '../../classes/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[];
  completeTodos: Todo[];
  
  all:boolean=false;
  incomplete:boolean=true;
  complete:boolean=false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.completeTodos = this.todoService.getComplete();

  }

  toggleVis(selection: string): void {
    if (selection === "complete") {
      this.complete=true;
      this.incomplete=false
    }
    else if (selection === "all") {
      this.complete=true;
      this.incomplete=true
    }
    else {
      this.incomplete=true
      this.complete=false;
    }
    
    
  }
  

}
