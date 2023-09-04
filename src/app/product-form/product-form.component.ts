import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  ProductService:any;

  constructor() {
    // @ts-ignore
    // @ts-ignore
    this.ProductService=new ProductService();
  }

}
