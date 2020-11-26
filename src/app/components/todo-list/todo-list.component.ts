import { Component, OnInit } from '@angular/core';
import {Todo} from '../../classes/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos = this.todoService.getTodos();
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  

}
