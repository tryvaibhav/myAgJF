import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:`
  //       <button (click)="showComponent1()">Show Component 1</button>
  //       <button (click)="showComponent2()">Show Component 2</button>
  //       <div *ngIf="showingComponent1">
  //         <app-products></app-products>
  //       </div>
  //       <div *ngIf="showingComponent2">
  //        <router-outlet></router-outlet>
  //       </div>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  ngOnInit(): void {
    this.showingComponent1=this.productService.getProduct()
  }
  ngOnChanges(): void {
    // Handle changes when navigating to the same component with different parameters
    this.showingComponent1=this.productService.getProduct()
  }

  public showingComponent1:boolean
  public showingComponent2:boolean

  constructor(private router: Router,private productService:ProductServiceService){
    this.showingComponent1 = true;
    this.showingComponent2 = false;
    console.log(this.showingComponent1)
    console.log(this.showingComponent2)
  }

    showComponent1() {
        // this.showingComponent1 = false;
        this.showingComponent2 = false;
    }

    showComponent2() {
        // this.showingComponent1 = false;
        this.showingComponent2 = true;
    }

    showLoginPage(){
      this.showingComponent1 = false;
      this.showingComponent2 = true;
      this.router.navigate(['/auth']);
    }
}
