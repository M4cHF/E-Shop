import { Component } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../interfaces/category';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productToAdd: Product = {
    idProduct: 0,
    nameProduct: '',
    priceProduct: 0,
    imageUrl: '',
    descriptionProduct: '',
    category: null,
  };
  
  categories: Category[] = [];
  catId: number = 0;
  catToAdd: Category | undefined;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.loadCategories();
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

  addProd(form: NgForm) {
    if (form.valid) {
      this.catId = form.value['category_id_add'];

      this.categoryService.getCategoryById(this.catId).subscribe({
        next: (category: Category) => {
          this.catToAdd = category;

          const newProduct: Product = {
            idProduct: 0,
            nameProduct: form.value['prod_name_add'],
            priceProduct: form.value['prod_price_add'],
            imageUrl: form.value['prod_image_add'],
            descriptionProduct: form.value['prod_description_add'],
            category: this.catToAdd,
          };

          this.productService.addProduct(newProduct).subscribe({
            next: (response) => {
              console.log('Product added successfully:', response);
              form.reset();
            },
            error: (err) => {
              console.error('Failed to add product:', err);
            },
          });
        },
        error: (err) => {
          console.error('Failed to fetch category:', err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
