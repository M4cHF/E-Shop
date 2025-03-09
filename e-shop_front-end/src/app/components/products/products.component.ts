import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }
  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      },
    });
  }

  // ------------------------------------------------------------------------------------------------------
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading: boolean = true;

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



  // ------------------------------------------------------------------------------------------------------
}
