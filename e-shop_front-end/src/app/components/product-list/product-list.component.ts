import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [FormsModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (Products) => {
        this.products = Products;
        this.filteredProducts = Products;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  searchForProducts(value: string) {
    if (!value.trim()) {
       this.loadProducts();
      return;
    }

    this.productService.searchProducts(value).subscribe({
      next: (filtered) => {
        this.filteredProducts = filtered;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
