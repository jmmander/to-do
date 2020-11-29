import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '../../classes/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  showIncomplete!: boolean;
  showComplete!: boolean;;

  todos!: Todo[];

  constructor(private todoService: TodoService) { 
    this.showComplete = false;
    this.showIncomplete = true;
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleVis(selection: string): void {
    if (selection === "complete") {
      this.showComplete = true;
      this.showIncomplete = false;
    }
    else if (selection === "all") {
      this.showComplete = true;
      this.showIncomplete = true;
    }
    else {
      this.showIncomplete = true;
      this.showComplete = false;
    }
    
    
  }
  

}
