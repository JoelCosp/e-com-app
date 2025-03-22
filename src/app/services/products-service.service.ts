import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  readonly api_url = "https://dummyjson.com/products";

  products!: any[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api_url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api_url}/${id}`);
  }
}
