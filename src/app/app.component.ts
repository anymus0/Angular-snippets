import { Component, OnInit } from '@angular/core';
import {HttpClientService} from './http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: any;

  constructor(httpService: HttpClientService) {
  }

  ngOnInit(): void {
  }
}
