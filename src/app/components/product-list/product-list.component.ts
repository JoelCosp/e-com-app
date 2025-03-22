import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import Product from '../../models/Product';
import { ProductsServiceService } from '../../services/products-service.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy{
  
  products: Product[] = [];
  productSub: Subscription | undefined;

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
      this.productSub = this.productService.getProducts().subscribe({
        next: (response: any) => {
          this.products = response.products;
        }, 
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log("Completed");
        }
      })
  }

  ngOnDestroy(): void {
      this.productSub?.unsubscribe();
  }
}
