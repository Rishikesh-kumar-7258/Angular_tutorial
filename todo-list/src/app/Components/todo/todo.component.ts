import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo: Todo = new Todo('', '');


  @Output() deleteTodoEvent = new EventEmitter<Todo>();

  handleDeleteBtnClick(todo:Todo) {
    this.deleteTodoEvent.emit(todo);
  }
}
