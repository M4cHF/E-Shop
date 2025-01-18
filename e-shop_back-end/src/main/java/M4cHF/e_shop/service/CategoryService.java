package M4cHF.e_shop.service;

import M4cHF.e_shop.model.Category;
import M4cHF.e_shop.model.Product;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> getAllCategories();
    Optional<Category> getCategoryById(Integer id);
    List<Product> getAllProductsByCategoryId(Integer id);
    Category addCategory(Category category);
    Category updateCategoryById(Category category, Integer id);
    void deleteCategoryById(Integer id);


}
