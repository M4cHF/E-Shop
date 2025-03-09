package M4cHF.e_shop.service;


import M4cHF.e_shop.exception.ResourceNotFoundException;
import M4cHF.e_shop.model.Product;
import M4cHF.e_shop.repository.CategoryRepository;
import M4cHF.e_shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;


// GET
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(int id) {
        return productRepository.findByIdProduct(id);
    }
    @Override
    public Optional<Product> getProductByName(String name) {
        return productRepository.findByNameProduct(name);

    }
    @Override
    public List<Product> searchProducts(String searchTerm) {
        // Search by name or description, or any other fields as needed
        List<Product> productsByName = productRepository.findByNameProductContainingIgnoreCase(searchTerm);
        List<Product> productsByDescription = productRepository.findByDescriptionProductContainingIgnoreCase(searchTerm);

        // Combine results (you can adjust this logic as needed, like removing duplicates)
        productsByName.addAll(productsByDescription);
        return productsByName;
    }

    @Override
    public List<Product> filterByPrice(double minPrice, double maxPrice) {
        return productRepository.findByPriceProductBetween(minPrice, maxPrice);
    }

    @Override
    public List<Product> filterByCategory(Integer categoryId) {
        return productRepository.findByCategoryIdCategory(categoryId);
    }


    // POST
    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

// PUT
    @Override
    public Product updateProductById(Product product, Integer id) {
        Optional<Product> existingProductOptional = productRepository.findById(id);

        if(existingProductOptional.isEmpty()){
            throw new ResourceNotFoundException("Product with id = " + id + " not found");
        }
        Product existingProduct = existingProductOptional.get();
        // update the product :
        existingProduct.setNameProduct(product.getNameProduct());
        existingProduct.setPriceProduct(product.getPriceProduct());
        existingProduct.setDescriptionProduct(product.getDescriptionProduct());
        existingProduct.setImageUrl(product.getImageUrl());
        existingProduct.setCategory(product.getCategory());

        return productRepository.save(existingProduct);
    }

// DELETE
    @Override
    public void deleteProductById(Integer id) {
        productRepository.deleteById(id);
    }

}
