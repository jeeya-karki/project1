import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title="This is a example of string_interpulation";

  ans:number=0;
  multiple(num1:any,num2:any){
    let final=eval(num1.value)*eval(num2.value);
    this.ans=final
  }

  d="This is an another example of string_interpulation in a main_componenet";

  answer:number=0
  Division(divide:any,divider:any){
    let fff=eval(divide.value)/eval(divider.value);
    this.answer=fff;
  }

  msg="This is a example of one way data-binding in main_component"
  a:number=0
  addition(no1:any,no2:any){
    let add=eval(no1.value)+eval(no2.value)
    this.a=add
  }

  s:number=0
  subtraction(no1:any,no2:any){
    this.s=(eval(no1.value)-eval(no2.value));

  }




}
