import { Component, OnInit } from '@angular/core';
import { AuthSeviceService } from '../auth-sevice.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  email=''
  pswd=''
  responseData:any;

  constructor(private service:AuthSeviceService){  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSignin(){
    sessionStorage.setItem("userEmail",this.email);
    console.log(this.email+" "+this.pswd)
    this.service.loginData({ username: this.email, password: this.pswd }).subscribe(
        (response)=>{
          this.responseData=response;
        },
        (error)=>{
          console.error('Error fetching data:', error);
        }
      );
  }
}
