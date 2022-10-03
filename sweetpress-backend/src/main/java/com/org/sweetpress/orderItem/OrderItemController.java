package com.org.sweetpress.orderItem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order-items")
public class OrderItemController {

    private final OrderItemServiceImpl orderItemServiceImpl;

    public OrderItemController(OrderItemServiceImpl orderItemServiceImpl) {
        this.orderItemServiceImpl = orderItemServiceImpl;
    }

    @GetMapping
    public List<OrderItemEntity> getAllItems() {
        return orderItemServiceImpl.getAllOrderItems();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public boolean newOrderItem(@RequestBody OrderItemEntity orderItemEntity) {
        return orderItemServiceImpl.createOrderItem(orderItemEntity);
    }
    @PutMapping(value = "/{orderId}")
    public boolean updateOrderItem(@PathVariable String orderId, @RequestBody OrderItemEntity orderItemEntity) {
        return orderItemServiceImpl.updateOrderItem(orderId, orderItemEntity);
    }
    // delete item
    @DeleteMapping(value = "/delete/{orderId}")
    public boolean deleteOrderItem(@PathVariable String orderId) {
        return orderItemServiceImpl.deleteOrderItem(Long.valueOf(orderId));
    }
}
