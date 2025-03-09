// import { Component } from '@angular/core';
// import { Product } from '../../../../interfaces/product';
// import { ProductService } from '../../../../services/product.service';
// import { FormsModule, NgForm } from '@angular/forms';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { Category } from '../../../../interfaces/category';
// import { CategoryService } from '../../../../services/category.service';

// @Component({
//   selector: 'app-update-product',
//   standalone: true,
//   imports: [FormsModule, RouterModule],
//   templateUrl: './update-product.component.html',
//   styleUrl: './update-product.component.css',
// })
// export class UpdateProductComponent {
//   id: number = 0;
//   productToUpdate: Product = {
//     idProduct: this.id,
//     nameProduct: '',
//     priceProduct: 0,
//     imageUrl: '',
//     descriptionProduct: '',
//     category: null,
//   };

//   catId: number = 0;
//   catToAdd: Category | undefined;

//   constructor(
//     private router: ActivatedRoute,
//     private productService: ProductService,
//     private categoryService: CategoryService
//   ) {}

//   categories: Category[] = [];

//   ngOnInit() {
//     this.id = Number(this.router.snapshot.paramMap.get('id'));
//     this.loadCategories();
//   }

//   loadCategories(): void {
//     this.categoryService.getCategories().subscribe({
//       next: (categories) => {
//         this.categories = categories;
//       },
//       error: (error) => {
//         console.error('Error loading categories:', error);
//       },
//     });
//   }

//   updateProd(form: NgForm) {
//     if (form.valid) {
//       this.catId = form.value['category_id_add'];

//       // Fetch the category by ID
//       this.categoryService.getCategoryById(this.catId).subscribe({
//         next: (category: Category) => {
//           // Assign the fetched category to catToAdd
//           this.catToAdd = category;

//           // Create a product object with the fetched category
//           const updatedProduct: Product = {
//             idProduct: 0, // Let the backend generate the ID
//             nameProduct: form.value['prod_name_add'],
//             priceProduct: form.value['prod_price_add'],
//             imageUrl: form.value['prod_image_add'],
//             descriptionProduct: form.value['prod_description_add'],
//             category: this.catToAdd, // Assign the fetched category
//           };

//       this.productService.updateProduct(updatedProduct, this.id).subscribe({
//         next: (response) => {
//           console.log('Product updated successfully:', response);
//           form.reset(); // Reset the form after successful update
//         },
//         error: (err) => {
//           console.error('Failed to update product:', err);
//         },
//       });
//     } else {
//       console.error('Form is invalid');
//     }
//   }
// }

import { Component } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Category } from '../../../../interfaces/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent {
  id: number = 0;
  productToUpdate: Product = {
    idProduct: this.id,
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
    private router: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
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

  updateProd(form: NgForm) {
    if (form.valid) {
      this.catId = form.value['category_id_update']; 

      this.categoryService.getCategoryById(this.catId).subscribe({
        next: (category: Category) => {
          
          this.catToAdd = category;

          
          const updatedProduct: Product = {
            idProduct: this.id,
            nameProduct: form.value['prod_name_update'],
            priceProduct: form.value['prod_price_update'],
            imageUrl: form.value['prod_image_update'],
            descriptionProduct: form.value['prod_description_update'],
            category: this.catToAdd, 
          };

          
          this.productService.updateProduct(updatedProduct, this.id).subscribe({
            next: (response) => {
              console.log('Product updated successfully:', response);
              form.reset(); // Reset the form after successful update
            },
            error: (err) => {
              console.error('Failed to update product:', err);
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
