package M4cHF.e_shop.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import M4cHF.e_shop.utilities.Role;

import java.util.List;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idUser;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String password;

    private String adresse;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Order> orders;
}
