package M4cHF.e_shop.repository;

import M4cHF.e_shop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface ProductRepository extends JpaRepository<Product, Integer> {

    Optional<Product> findByNameProduct(String name);
    // searching
    List<Product> findByNameProductContainingIgnoreCase(String searchTerm);
    List<Product> findByDescriptionProductContainingIgnoreCase(String searchTerm);
    // filtering
    List<Product> findByPriceProductBetween(Double minPrice, Double maxPrice);
    List<Product> findByCategoryIdCategory(Integer categoryId);

    Optional<Product> findByIdProduct(int id);
}
