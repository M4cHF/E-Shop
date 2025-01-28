import { Component } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, RouterModule, ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productToUpdate: Product = {
    idProduct :0,
    nameProduct: '',
    priceProduct: 0,
    imageUrl: '',
    descriptionProduct: '',
    idCategory: 0,
  };

  constructor(private productService: ProductService){

  }

  updateProd(form: NgForm) {
    console.log("product updated ...")
  }



}
