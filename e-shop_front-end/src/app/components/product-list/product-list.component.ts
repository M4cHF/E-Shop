import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';


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
  products: Product[] = [];
  isLoading: boolean = true;

  constructor(private productService : ProductService){
    
  }

  ngOnInit(){
    this.loadProducts();
  }
   
 loadProducts():void {
  this.productService.getProducts().subscribe({
    next: (Products) => {
      this.products = Products;
      this.isLoading = false;
      
    },
    error: (error: any) => {
      console.log(error);
      this.isLoading = false; 
    }
  });
  }
}


