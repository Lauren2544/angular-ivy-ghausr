import { Component, VERSION, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  message_counter: number;
  ngOnInit(): void {
    const obs$ = interval(300);
    obs$.subscribe((d) => {
      this.message_counter = d;
    });
  }
}
