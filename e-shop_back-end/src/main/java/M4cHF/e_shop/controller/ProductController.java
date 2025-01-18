package M4cHF.e_shop.controller;

import M4cHF.e_shop.model.Product;
import M4cHF.e_shop.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    ProductController(ProductService productService) {
        this.productService = productService;
    }

// GET
    // getAllProducts
    @GetMapping("")
    List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    // getProductByID
    @GetMapping("/{id}")
    Optional<Product> getProductById(@PathVariable int id){
        return productService.getProductById(id);
    }
    // getProductByName
    @GetMapping("/by-name/{name}")
    Optional<Product> getProductByName(@PathVariable String name){
        return productService.getProductByName(name);
    }
    // search
    @GetMapping("/search")
    List<Product> searchingForProducts(@RequestParam String searchTerm){
        return productService.searchProducts(searchTerm);
    }
    // filter
    @GetMapping("/filter/price")
    List<Product> filterProductsByPrice(@RequestParam double minPrice, @RequestParam double maxPrice){
        return productService.filterByPrice(minPrice, maxPrice);
    }
    @GetMapping("/filter/category")
    List<Product> filterProductsByCategory(@RequestParam Integer categoryId){
        return productService.filterByCategory(categoryId);
    }

// POST
    // addProduct
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

// PUT
    // updateProductByID
    @PutMapping("/{id}")
    Product updateProduct(@RequestBody Product product, @PathVariable Integer id){
        return productService.updateProductById(product, id);
    }

// DELETE
    // deleteProductByID
    @DeleteMapping("/{id}")
    void deleteProductById(@PathVariable Integer id){
        productService.deleteProductById(id);
    }


}
