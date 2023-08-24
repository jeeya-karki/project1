import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 mm="This is a demo of template_driven_form in header-component"
 //
 //  multiple:number=0;
 //  mul(num1:any,num2:any){
 //   let tt=eval(num1.value)*eval(num2.value);
 //   this.multiple=tt;
 //  }

 viewdata(empformRef:NgForm){
   console.log(empformRef.value);
 }

}
