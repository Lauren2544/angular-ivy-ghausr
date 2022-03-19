import { Component, VERSION, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //the current state of the button
  is_recieving: string;
  message_counter: number = 0;
  //toggle function
  toggle(starting: string) {
    const obs$ = interval(300);
    obs$.subscribe((d) => {
      if (starting == 'start') {
        //prints out the message counter -- works
        this.message_counter = d;
      } else if (starting == 'home') {
        //should set the counter to zero but this is obviously not how that is  done -- fails
        this.message_counter = 0;
      } else {
        //should set the counter to the current last state again doesn't work -- fails
        this.message_counter = this.message_counter;
      }
    });
  }
}
// //another attempt
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
