import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo: Todo = new Todo('', '');
  @Output() deleteTodoEvent = new EventEmitter<Todo>();
  @Output() updateTodoEvent = new EventEmitter<Todo>();

  handleDeleteBtnClick(todo:Todo) {
    this.deleteTodoEvent.emit(todo);
  }

  handleChange(todo:Todo) {
    this.updateTodoEvent.emit(todo);
  }
}
