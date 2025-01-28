import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';
import { Category } from '../../../interfaces/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  products: Product[] = [];
  categories : Category[] =[];

  


  constructor(
    private productService: ProductService,
    private categoryService : CategoryService,  
  ){ }


  ngOnInit(){
    this.loadProducts();
    this.loadCategories();
  }
     
  loadProducts():void {
    this.productService.getProducts().subscribe({
      next: (Products) => {
        this.products = Products;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
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

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.idProduct !== id);
      },
      error: (err) => console.error('Failed to delete product', err),
    });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe({
      next: ()=> {
        this.categories = this.categories.filter((category) => category.idCategory !== id);
      },
      error: (err) => console.error('Failed to delete category', err),

    });
  }
  

}
