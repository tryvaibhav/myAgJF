import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myApp4';
  tocken:any=sessionStorage.getItem('token');
  showLoginLink:boolean=true;
  showLogoitLink:boolean=false;
  // param1:any
  // param2:any
  param1: string="";
  param2: string="";
  params:any = history.state;
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      // Retrieve parameters from queryParams
      // this.param1 = params.get('param1');
      // this.param2 = params.get('param2');

      // Do something with the retrieved parameters
      // console.log('Param1:', this.param1);
      // console.log('Param2:', this.param2);
      const state = window.history.state;
      this.param1 = state.param1;
      this.param2 = state.param2;
      console.log('Param1:', this.param1);
      console.log('Param2:', this.param2);

      if(params.get("param1")=='true')this.showLogout()
    });
  }

  constructor(private route: ActivatedRoute, private router: Router){
    console.log("inside AppComponent constructor")
  }
  
  showLogout(){
    console.log("inside showLogout")
    this.tocken=sessionStorage.getItem('token');
    if(this.tocken!=null){
      console.log("this.tocken!=null")
      this.showLogoitLink=true
      this.showLoginLink=false
    }
    // this.showLoginLink=false
  }
  isSignedIn(){
    console.log("inside isSignedIn")
    if(this.tocken!=null)this.showLogout()
  }
  logout(){
    console.log("inside logout")
    sessionStorage.clear();
    this.showLoginLink=true
    this.showLogoitLink=false
    // const currentUrl = this.router.createUrlTree(this.route.snapshot.url);
    // this.router.navigateByUrl(currentUrl);
    window.location.reload();
  }

  
}
