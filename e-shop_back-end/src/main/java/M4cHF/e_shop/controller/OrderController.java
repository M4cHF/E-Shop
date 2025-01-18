package M4cHF.e_shop.controller;

import M4cHF.e_shop.model.Order;
import M4cHF.e_shop.service.OrderService;
import M4cHF.e_shop.service.OrderServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

// GEt
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
    @GetMapping("/{id}")
    Optional<Order> getOrderById(@PathVariable int id) {
        return orderService.getOrderById(id);
    }
// Post
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    Order addOrder(@RequestBody Order order) {
        return orderService.addOrder(order);
    }

// Put
    @PutMapping("/{id}")
    Order updateOrder( @RequestBody Order order,@PathVariable int id) {
        return orderService.updateOrder(order, id);
    }
// Delete
    @DeleteMapping("/{id}")
    void deleteOrder(@PathVariable int id) {
        orderService.deleteOrderById(id);
    }
}
