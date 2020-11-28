import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;
  @Input() complete!: boolean;

  readOnly = true;
  faEdit = faEdit;



  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {
  }

  removeTodo(listname:string): void {
    this.todoService.removeTodo(this.todo, listname)
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
    this.complete = true;
    this.todoService.addComplete(this.todo);
    this.removeTodo("incomplete");
  }

  uncompleteTodo() {
    this.complete = false;
    this.todoService.addTodo(this.todo.text);
    this.removeTodo('complete');
  }

}
