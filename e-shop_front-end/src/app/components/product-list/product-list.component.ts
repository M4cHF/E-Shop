import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { response } from 'express';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [FormsModule,],
  providers: [ProductService, ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  allProd: Product[] = [];

  constructor(private productService : ProductService){
    
  }

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        this.allProd = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
    

}
