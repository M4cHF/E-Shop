package M4cHF.e_shop.controller;

import M4cHF.e_shop.model.Category;
import M4cHF.e_shop.model.Product;
import M4cHF.e_shop.service.CategoryService;
import M4cHF.e_shop.service.CategoryServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

// GET
    @GetMapping("")
    List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    Optional<Category> getCatgoryById(@PathVariable int id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/{id}/products")
    List<Product> getAllProductsByCategory(@PathVariable int id) {
        return categoryService.getAllProductsByCategoryId(id);
    }

// POST
    @PostMapping("")
    Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

// PUT
    @PutMapping("/{id}")
    Category updateCategoryById(@RequestBody Category category ,@PathVariable int id) {
        return categoryService.updateCategoryById(category, id);
    }

// DELETE
   @DeleteMapping("/{id}")
   void deleteCategoryById(@PathVariable int id) {
        categoryService.deleteCategoryById(id);
    }

}
