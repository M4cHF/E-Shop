package M4cHF.e_shop.repository;

import M4cHF.e_shop.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface CartRepository extends JpaRepository<Cart, Integer> {

//    Optional<Object> findByUserId(Integer userId);
}
