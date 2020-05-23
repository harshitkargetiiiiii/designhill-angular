import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrls: ['./cartcheckout.component.css']
})
export class CartcheckoutComponent implements OnInit {
  items = []
  total = 0;
  constructor(private productService: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
     this.http.get('http://localhost:3000/api/v1/cart').subscribe((data:[]) => {
       console.log(data)
       this.items = data;
       for(let product of this.items){
        this.total += product.quantity * product.product_data[0].price
       }
     })
     
  }

}
