import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component {
t="This is an example of template_drived_form."


  product:any=""

  viewdata(productFormRef: NgForm) {
  this.product=productFormRef.value;
  //  console.log(productFormRef.value);
  }




}
