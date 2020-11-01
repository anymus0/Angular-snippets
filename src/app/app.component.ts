import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {HttpClientService} from './http-client.service';
import {Todo} from './classes/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  todos: Array<Todo> = [];

  getTodos(): void {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // fetch and sub to observable
    this.httpService.get(url).subscribe((todos: Array<Todo>) => {
      this.todos = todos;
    });
  }

  constructor(private httpService: HttpClientService) {
    this.getTodos();
  }

  ngOnInit(): void {
  }
}
