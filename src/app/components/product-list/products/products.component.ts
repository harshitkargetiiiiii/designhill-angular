import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service.service';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
     this.productService.findAll().subscribe((data:[]) => {
       this.products = data;
     })
  }

  addProducts(product){
    this.productService.sendData(product)
    console.log(product)
    this.http.post('http://localhost:3000/api/v1/cart', {product_id: product.product_id}).subscribe((data)=> {
      console.log(data);
    })
    

  }
  

}
