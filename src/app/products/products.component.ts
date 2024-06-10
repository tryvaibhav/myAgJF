import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  isAdmin:any;
  responseData:any
  constructor(private service:ProductServiceService){
    
  }

  ngOnInit(): void {
    this.getProducts()
  }
  
  getProducts(){
    console.log("inside getProducts")
    this.service.getProducts().subscribe(
      (response)=>{
        this.responseData=response
        console.log(response)
        if(sessionStorage.getItem('isAdmin')=='Admin')this.isAdmin=true;
        else this.isAdmin=false
        console.log(this.isAdmin)
        // sessionStorage.setItem('products',this.responseData)
      }
    )
  }
}
