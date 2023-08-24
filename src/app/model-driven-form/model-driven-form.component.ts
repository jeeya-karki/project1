import { Component } from '@angular/core';
import {FormControl, FormGroup, isFormControl} from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {

 //  Emp_formGroup=new FormGroup({
 //    e_id:new FormControl(),
 //    e_name:new FormControl(),
 //    e_salary:new FormControl(""),
 //    e_department:new FormControl(""),
 //    e_experience:new FormControl(""),
 //
 //  })
 //
 // e_view(){
 //   console.log(this. Emp_formGroup.value);
 // }

  Productformgroup=new FormGroup({
    p_id:new FormControl(),
    p_name:new FormControl(),
    p_quantity:new FormControl(),
    p_price:new FormControl(),
    p_discount:new FormControl(),
  })

  // Product_view(){
  //   // console.log(this.Productformgroup.value);
  //   this.viewDetail=this.Productformgroup.value;
  // }
  Product=this.Productformgroup.value;


}
