import { Component } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, RouterModule, ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  id: number = 0;
  productToUpdate: Product = {
    idProduct :this.id,
    nameProduct: '',
    priceProduct: 0,
    imageUrl: '',
    descriptionProduct: '',
    idCategory: 0,
  };

  constructor(
    private router : ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(){
    this.id = Number(this.router.snapshot.paramMap.get("id"));
  }

  updateProd(form: NgForm) {
    if (form.valid) {
      const newProduct = {
        idProduct:this.id ,
        nameProduct: form.value['prod_name_update'],
        priceProduct: form.value['prod_price_update'],
        imageUrl: form.value['prod_image_update'],
        descriptionProduct: form.value['prod_description_update'],
        idCategory: form.value['category_id_update'], 
      };
  
      this.productService.deleteProduct( this.id).subscribe({
        next: (response) => {
          console.log('Product updated successfully:', response);
          form.reset();
        },
        error: (err) => {
          console.error('Failed to update product:', err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }



}
