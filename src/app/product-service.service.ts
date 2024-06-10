import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productFlag:boolean=true;
  

  private url='http://localhost:4046';

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(`${this.url}/product/getAll`)
  }

  setProduct(value:boolean):void{
    console.log("inside setProduct")
    this.productFlag=value
  }

  getProduct():boolean{
    console.log("inside getProduct")
    return this.productFlag
  }

}
