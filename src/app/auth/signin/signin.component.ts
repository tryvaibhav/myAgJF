import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from '../auth-sevice.service';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
@Component({
  selector: 'app-signin',
  // templateUrl: './signin.component.html',
  templateUrl:'./signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  email=''
  pswd=''
  responseData:any;
  isAdmin="false";
  constructor(private service:AuthSeviceService,private router: Router,private productService:ProductServiceService){  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSignin(){
    sessionStorage.setItem("userEmail",this.email);
    console.log(this.email+" "+this.pswd)
    this.service.loginData({ email: this.email, password: this.pswd }).subscribe(
        (response)=>{
          this.responseData=response;
          console.log(response)
          sessionStorage.setItem('token',response);
          this.isAdmin=response.role
          console.log(this.isAdmin)
          sessionStorage.setItem('isAdmin',this.isAdmin);
          this.productService.setProduct(true)
          const navigationExtras: NavigationExtras = {
            state: {
              param1: 'true',
              param2: 'value2'
            }
          };
          //below line show params in url , so using above
          // this.router.navigate([''], { queryParams: { param1: 'true', param2: 'value2' } })
          this.router.navigate([''], navigationExtras);
        },
        (error)=>{
          console.error('Error fetching data:', error);
        }
      );
  }
}
