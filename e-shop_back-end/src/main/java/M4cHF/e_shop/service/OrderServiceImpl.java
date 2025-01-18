package M4cHF.e_shop.service;

import M4cHF.e_shop.exception.ResourceNotFoundException;
import M4cHF.e_shop.model.Order;
import M4cHF.e_shop.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService{

    private OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> getOrderById(int id) {
        return orderRepository.findById(id);
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Order order, int id) {
        Optional<Order> existingOrderOptional = orderRepository.findById(id);
        if (existingOrderOptional.isEmpty()) {
            throw new ResourceNotFoundException("Order with id = " + id + " not found");
        }
        Order existingOrder = existingOrderOptional.get();
        existingOrder.setDateOrder(order.getDateOrder());
        existingOrder.setOrderDetails(order.getOrderDetails());
        existingOrder.setUser(order.getUser());
        return orderRepository.save(existingOrder);
    }

    @Override
    public void deleteOrderById(int id) {
        orderRepository.deleteById(id);
    }
}
