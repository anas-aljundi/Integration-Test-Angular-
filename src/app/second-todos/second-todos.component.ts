import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-second-todos',
  templateUrl: './second-todos.component.html',
  styleUrls: ['./second-todos.component.css']
})
export class SecondTodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) { }

  ngOnInit() {
    // this.service.getTodos().subscribe(t => this.todos = t);
    this.service.getTodosPromise().then(t => this.todos = t);
  }

  add() {
    const newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?')){
      this.service.delete(id).subscribe();
    }
  }

}
