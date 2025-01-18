package M4cHF.e_shop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name ="products")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_product")
    private Integer idProduct;

    @Column(name="name_product")
    private String nameProduct;

    @Column(name="desc_product")
    private String descriptionProduct;

    @Column(name="price_product")
    private double priceProduct;

    @Column(name="image_product")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "id_category")
    @JsonBackReference
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderDetails;

}
