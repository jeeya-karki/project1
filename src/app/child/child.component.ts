import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

t:string="This is a demo of string interpulation in child-component";
ans:string=""
  add(no1:any,no2:any){
    let total=eval(no1.value)+eval(no2.value);
    this.ans=total;
  }

  t1:string="This is a normal demo of substraction in child-component ";
  answer:number=0;

  min(a:any,b:any){
    let aaa= eval(a.value)-eval(b.value);
     this.answer=aaa;
  }


}
