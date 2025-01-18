package M4cHF.e_shop.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="categories")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_category")
    private Integer idCategory;

    @Column(name="name_category", nullable = false, unique = true)
    private String nameCategory;

    @OneToMany(mappedBy = "category")
    @JsonManagedReference
    private List<Product> products;


}
