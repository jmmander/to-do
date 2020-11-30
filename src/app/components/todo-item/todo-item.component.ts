import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
import { faEdit, faTrashAlt, faFlag } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;


  readOnly = true;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faFlag = faFlag;

  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {
  }

  removeTodo(listname:string): void {
    this.todoService.removeTodo(this.todo)
  }

  makeEditable():void {
    this.readOnly = false;
  }

  saveEdit():void {
    if (this.readOnly === false) {
      this.readOnly = true;
      
    }
  }

  completeTodo() {
    this.todo.complete = true;
  }

  getPriority() {
    return this.todo.priority.toString();
    
  }

}
