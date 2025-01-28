import { Component } from '@angular/core';
import { Category } from '../../../../interfaces/category';
import { CategoryService } from '../../../../services/category.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule, RouterModule, ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryToAdd : Category= {
    idCategory : 0,
    nameCategory : ''
  }

  constructor(private categoryService: CategoryService){}

  addCateg(form: NgForm){
    if (form.valid) {
      const newCategory = {
        idCategory:0 ,
        nameCategory: form.value['cat_name_add']
      };
  
      this.categoryService.addCategory(newCategory).subscribe({
        next: (response) => {
          console.log('Category added successfully:', response);
          // Reset the form after successful submission
          form.reset();
          // Optionally, show a success message or redirect
        },
        error: (err) => {
          console.error('Failed to add category:', err);
          // Optionally, show an error message
        },
      });
    } 
    else {
      console.error('Form is invalid');
      // Optionally, show a validation error message
    }
  }

}
