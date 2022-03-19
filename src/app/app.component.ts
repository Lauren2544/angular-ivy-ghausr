import { Component, VERSION, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  is_recieving: string;
  message_counter: number = 0;
  toggle(starting: string) {
    const obs$ = interval(300);
    obs$.subscribe((d) => {
      if (starting == 'start') {
        this.message_counter = d;
      } else if (starting == 'home') {
        this.message_counter = 0;
      } else {
        this.message_counter = this.message_counter;
      }
    });
  }
}
// export class AppComponent implements OnInit {
//   // name = 'Angular ' + VERSION.major;
//   is_recieving: string;
//   message_counter: number;
//   ngOnInit(): void {
//     const obs$ = interval(300);
//     obs$.subscribe((d) => {
//       this.message_counter = d;
//     });
//   }
// }
