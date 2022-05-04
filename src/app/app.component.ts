import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto';
  logeado=false;

  constructor() {
    if (localStorage.getItem('user')!=='null') {
      this.logeado=true;
    }
    // console.log(localStorage.getItem('user'));
   }
}
