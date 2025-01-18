package M4cHF.e_shop.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "order_details")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {

    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_order")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "price", nullable = false)
    private Double price;

}
