package M4cHF.e_shop.service;

import M4cHF.e_shop.model.Cart;
import M4cHF.e_shop.model.CartItem;
import M4cHF.e_shop.model.Product;
import M4cHF.e_shop.repository.CartRepository;
import M4cHF.e_shop.repository.ProductRepository;
import M4cHF.e_shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

//    public Cart getCartByUserId(Integer userId) {
//        return (Cart) cartRepository.findByUserId(userId)
//                .orElseThrow(() -> new RuntimeException("Cart not found for user ID: " + userId));
//    }
//
//    // Add a product to the cart
//    public Cart addProductToCart(Integer userId, Integer productId, int quantity) {
//        Cart cart = getCartByUserId(userId);
//        Product product = productRepository.findById(productId)
//                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));
//
//        // Check if the product is already in the cart
//        Optional<CartItem> existingItem = cart.getItems().stream()
//                .filter(item -> item.getProduct().getIdProduct().equals(productId))
//                .findFirst();
//
//        if (existingItem.isPresent()) {
//            // Update the quantity if the product is already in the cart
//            CartItem item = existingItem.get();
//            item.setQuantity(item.getQuantity() + quantity);
//        } else {
//            // Add a new item to the cart
//            CartItem newItem = new CartItem();
//            newItem.setProduct(product);
//            newItem.setQuantity(quantity);
//            newItem.setCart(cart);
//            cart.addItem(newItem);
//        }
//
//        return cartRepository.save(cart);
//    }
//
//    // Remove a product from the cart
//    public Cart removeProductFromCart(Integer userId, Integer productId) {
//        Cart cart = getCartByUserId(userId);
//
//        // Find the item to remove
//        CartItem itemToRemove = cart.getItems().stream()
//                .filter(item -> item.getProduct().getIdProduct().equals(productId))
//                .findFirst()
//                .orElseThrow(() -> new RuntimeException("Product not found in cart: " + productId));
//
//        cart.removeItem(itemToRemove);
//        return cartRepository.save(cart);
//    }
//
//    // Clear the cart
//    public Cart clearCart(Integer userId) {
//        Cart cart = getCartByUserId(userId);
//        cart.getItems().clear();
//        return cartRepository.save(cart);
//    }


}
