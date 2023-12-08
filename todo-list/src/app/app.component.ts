import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './Todo';
// import { BrowserStorageService } from './storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // constructor(private localStore : BrowserStorageService) {}

  title = 'todo-list';
  // todos : Todo[] = JSON.parse(this.localStore.get("todos") as string)  || [];
  todos : Todo[] = [];

  todoForm = new FormGroup({
    title : new FormControl('', Validators.required),
    desc : new FormControl('', Validators.required), 
  })

  handleSubmit() {
    if (this.todoForm.valid) {
      let todo = new Todo(this.todoForm.value.title as string, this.todoForm.value.desc as string);
      todo.id = this.todos.length + 1;
      this.todos.push(todo);

      this.todoForm.reset();

      // this.localStore.set("todos", JSON.stringify(this.todos));
    }
  }

  deleteItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // this.localStore.set("todos", JSON.stringify(this.todos));
  }

  updateItem(todo :Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !todo.completed;
    // this.localStore.set("todos", JSON.stringify(this.todos));
  }

}
