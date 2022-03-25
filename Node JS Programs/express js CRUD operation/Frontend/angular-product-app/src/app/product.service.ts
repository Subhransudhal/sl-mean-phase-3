import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient


  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/productDetails")
  }

  //by default all httpclient method return type data consider as json.
  // if return type is text we have to use 3rd parameter
  // post method take 2 paramm=eter, 1st parameter url and 2nd parameter data in json format
  storeProductInfo(product:Product):Observable<string>{
    return this.http.post("http://localhost:9090/productstore",product,{responseType : `text`});
  }

  deleteProductById(pid:number):Observable<string>{
    return this.http.delete("http://localhost:9090/deleteProductInfo/"+pid,{responseType : `text`});
  }
upadateProduct(product:any):Observable<string>{
    return this.http.put("http://localhost:9090/updateProductInfo",product,{responseType : `text`});
   }
  }
    
