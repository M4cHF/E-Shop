package M4cHF.e_shop.service;

import M4cHF.e_shop.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> getAllProducts();
    Optional<Product> getProductById(int id);
    Optional<Product> getProductByName(String name);
    List<Product> searchProducts(String searchTerm);
    List<Product> filterByPrice(double minPrice, double maxPrice);
    List<Product> filterByCategory(Integer categoryId);
    Product addProduct(Product product);
    Product updateProductById(Product product, Integer id);
    void deleteProductById(Integer id);



}
