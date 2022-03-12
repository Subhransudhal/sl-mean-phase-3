import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products:Array<Product>=[];

  constructor(public pser:ProductService) { }
  ngOnInit(): void {
  }


  getAllproductdetails(){
    this.pser.getAllproduct().subscribe(result=>this.products=result);
  }
}
