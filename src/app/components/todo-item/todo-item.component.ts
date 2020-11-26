import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../classes/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {
  }

  removeTodo(): void {
    this.todoService.removeTodo(this.todo)
  }
}
