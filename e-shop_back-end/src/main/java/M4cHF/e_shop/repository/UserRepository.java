package M4cHF.e_shop.repository;

import M4cHF.e_shop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
