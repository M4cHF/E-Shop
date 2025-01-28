import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Category } from '../../interfaces/category';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories: Category[] = [];


  constructor(private categoryService: CategoryService){}

  ngOnInit(){
    this.loadCategories();
  }
  loadCategories(): void{
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error); 
      },
    });
  }

}
