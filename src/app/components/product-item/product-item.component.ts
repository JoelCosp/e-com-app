import { Component, Input, OnInit } from '@angular/core';
import Product from '../../models/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  
  @Input() product: Product | undefined; 

  ngOnInit(): void {
    console.log(this.product);    
  }
}
