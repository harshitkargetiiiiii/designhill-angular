import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
items = []
products: Product[];
subject = new Subject<Object>();
  constructor(private http: HttpClient) {}

   findAll() {
     return this.http.get("http://localhost:3000/api/v1/products")

   }

   sendData(data){
     this.items.push(data)
     this.subject.next(data)
   }

   getData(){
     return this.items
   }
}
