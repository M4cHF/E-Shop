package M4cHF.e_shop.service;

import M4cHF.e_shop.model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    List<Order> getAllOrders();
    Optional<Order> getOrderById(int id);
    Order addOrder(Order order);
    Order updateOrder(Order order, int id);
    void deleteOrderById(int id);
}
