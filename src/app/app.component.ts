import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'st1';

  msg:string="";

  add(no1:any,no2:any) {
    let total = eval(no1.value)+eval(no2.value);
    this.msg=total;
  }

  tit ="This is a demo of string_interpolation"


}


