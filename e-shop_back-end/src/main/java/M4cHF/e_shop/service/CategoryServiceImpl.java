package M4cHF.e_shop.service;

import M4cHF.e_shop.exception.ResourceNotFoundException;
import M4cHF.e_shop.model.Category;
import M4cHF.e_shop.model.Product;
import M4cHF.e_shop.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

// GET
    public List<Category> getAllCategories() {
        return (List<Category>) categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(Integer id) {
        return categoryRepository.findById(id);
    }

    @Override
    public List<Product> getAllProductsByCategoryId(Integer id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category with id = "+ id + " is not found"));
        return category.getProducts();
    }

    // POST
    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

// PUT
    @Override
    public Category updateCategoryById(Category category, Integer id) {
        Optional<Category> existingCategoryOptional = categoryRepository.findById(id);

        if(existingCategoryOptional.isEmpty()){
            throw new ResourceNotFoundException("Category with id ="+ id +"is not found");
        }
        Category existingCategory = existingCategoryOptional.get();
        // update the category
        existingCategory.setNameCategory(category.getNameCategory());

        return categoryRepository.save(existingCategory);
    }

// DELETE
    public void deleteCategoryById(Integer id) {
        categoryRepository.deleteById(id);
    }

}
