import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    url:new FormControl()
  });
  products:Array<Product>=[];
  storeMsg:string="";
  deletemsg:string="";
  updatemsg:string="";
  flag:boolean=false;
  updateresult:string="";

  constructor(public pser:ProductService) { }    //DI for service class
//life cycle method of component which is called only once after component loaded

  ngOnInit(): void {
    this.getAllproductdetails();
  }

  getAllproductdetails(){
    this.pser.getAllProduct().subscribe((result: Product[])=>this.products=result);
  }

  storeProduct(){
     let product = this.productRef.value;
    // console.log(product);
    this.pser.storeProductInfo(product).subscribe(result=>this.storeMsg=result,
      error=>console.log(error),
      ()=>this.getAllproductdetails());
      this.productRef.reset();  ///to reset the value
  }
  DeleteProduct(pid:any){
  //console.log(pid);
  this.pser.deleteProductById(pid).subscribe(result=>this.deletemsg=result,
    error=>console.log(error),()=>this.getAllproductdetails());
  }
  pid:number=0;
  price:number=0;
  url:string="";
   updateProduct(product:Product){
     //console.log(product);
     this.flag=true;
     this.pid = product.pid;
     this.price = product.price;
     this.url = product.url
    }

    updateRecordFromDb(){
      let product = {pid:this.pid,price:this.price,url:this.url};
      console.log(product);
      this.pser.upadateProduct(product).subscribe(result=>this.updateresult=result,
        error=>console.log(error),()=>this.getAllproductdetails());
        this.flag=false;    //it is used for reset the update form 
    }
}
