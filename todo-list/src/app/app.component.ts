import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  todos: Todo[] = [{
    id: 1,
    title: 'Todo 1',
    desc: 'Todo 1 description',
    completed: false,
    date: new Date()
  },
  {
    id: 2,
    title: 'Todo 2',
    desc: 'Todo 2 description',
    completed: false,
    date: new Date()
  },
  {
    id: 3,
    title: 'Todo 3',
    desc: 'Todo 3 description',
    completed: false,
    date: new Date()
  },
  {
    id: 4,
    title: 'Todo 4',
    desc: 'Todo 4 description',
    completed: false,
    date: new Date()
  },
  {
    id: 5,
    title: 'Todo 5',
    desc: 'Todo 5 description',
    completed: false,
    date: new Date()
  },
  {
    id: 6,
    title: 'Todo 6',
    desc: 'Todo 6 description',
    completed: false,
    date: new Date()
  },
  {
    id: 7,
    title: 'Todo 7',
    desc: 'Todo 7 description',
    completed: false,
    date: new Date()
  },
  {
    id: 8,
    title: 'Todo 8',
    desc: 'Todo 8 description',
    completed: false,
    date: new Date()
  },
  {
    id: 9,
    title: 'Todo 9',
    desc: 'Todo 9 description',
    completed: false,
    date: new Date()
  },
  {
    id: 10,
    title: 'Todo 10',
    desc: 'Todo 10 description',
    completed: false,
    date: new Date()
  },
  {
    id: 11,
    title: 'Todo 11',
    desc: 'Todo 11 description',
    completed: false,
    date: new Date()
  },
  {
    id: 12,
    title: 'Todo 12',
    desc: 'Todo 12 description',
    completed: false,
    date: new Date()
  },
  {
    id: 13,
    title: 'Todo 13',
    desc: 'Todo 13 description',
    completed: false,
    date: new Date()
  },];

  

  todoForm = new FormGroup({
    title : new FormControl('', Validators.required),
    desc : new FormControl('', Validators.required),    
  })

  handleSubmit() {
    if (this.todoForm.valid) {
      let todo = new Todo(this.todoForm.value.title as string, this.todoForm.value.desc as string);
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    }
  }

  deleteItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
