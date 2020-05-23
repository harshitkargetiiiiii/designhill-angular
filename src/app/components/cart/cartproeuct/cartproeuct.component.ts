import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/service/product.service.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cartproeuct',
  templateUrl: './cartproeuct.component.html',
  styleUrls: ['./cartproeuct.component.css']
})
export class CartproeuctComponent implements OnInit {
  items = [];
  price = 0;
  data: Subscription;
  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   this.items = this.productService.getData()
   console.log(this.items)
    this.calculatePrice()
  }

  checkout(){
   this.router.navigate(['./checkout'])
  }

  calculatePrice(){
    for(let product of this.items){
      this.price += product.price;
    }
  }
 
  

}
