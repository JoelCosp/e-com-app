import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../../services/products-service.service';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productId: number | null = null; 
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductsServiceService) {
    this.productId = null;
    this.product = null;
  }

  ngOnInit(): void {
      this.productId = this.route.snapshot.params['id'];
      if(this.productId != null) {
        this.productService.getProduct(this.productId).subscribe({
          next: (response: Product) => {
            this.product = response;
            console.log(this.product.reviews);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {
            console.log("Product obtained");
          }
        })
      }
  }
}
