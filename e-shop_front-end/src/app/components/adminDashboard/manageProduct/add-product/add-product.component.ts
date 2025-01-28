import { Component } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, RouterModule,],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productToAdd: Product = {
    idProduct :0,
    nameProduct: '',
    priceProduct: 0,
    imageUrl: '',
    descriptionProduct: '',
    idCategory: 0,
  };

  constructor(private productService: ProductService){
  
  }

  addProd(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Create a product object from the form values
      const newProduct = {
        idProduct:1 ,
        nameProduct: form.value['prod_name_add'],
        priceProduct: form.value['prod_price_add'], // Convert to number
        imageUrl: form.value['prod_image_add'],
        descriptionProduct: form.value['prod_description_add'],
        idCategory: form.value['category_id_add'], // Convert to number
      };
  
      // Call the product service to add the product
      this.productService.addProduct(newProduct).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          // Reset the form after successful submission
          form.reset();
          // Optionally, show a success message or redirect
        },
        error: (err) => {
          console.error('Failed to add product:', err);
          // Optionally, show an error message
        },
      });
    } else {
      console.error('Form is invalid');
      // Optionally, show a validation error message
    }
  }


}
