import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {priority} from '../../classes/todo'


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent implements OnInit {

  todoForm!: FormGroup;
  today: string = new Date().toJSON().split('T')[0];

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      todoText: ["", [Validators.required, Validators.minLength(2)]],
      todoPriority: [null, [Validators.required]],
      todoDueDate: [null],
      
      })
  }

  addTodo(todoData: any): void {
    console.log("adding todo");
    console.log(todoData)
    this.todoService.addTodo(todoData.todoText, todoData.todoPriority, todoData.todoDueDate, false)
    this.todoForm.reset();
    this.changeColor();
  }

  changeColor() : void {
    let element = document.getElementById("prioritySelector");
    if (element !== null) {
      element.style.color = "black";
    }

  }

}
