package com.org.sweetpress.orderItem;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class OrderItemServiceImpl implements OrderItemService {

    private final OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public boolean createOrderItem(OrderItemEntity orderItemEntity) {
        OrderItemEntity newOrderItemEntity = new OrderItemEntity(
                orderItemEntity.getId(),
                orderItemEntity.getItemName(),
                orderItemEntity.getItemQuantity(),
                orderItemEntity.getItemDesc(),
                orderItemEntity.getItemPrice(),
                orderItemEntity.getCart());
        orderItemRepository.save(newOrderItemEntity);
        return true;
    }

    @Override
    public boolean updateOrderItem(String id, OrderItemEntity orderItemEntity) {
        OrderItemEntity currOrderItem = orderItemRepository.getReferenceById(Integer.valueOf(id));
        if (currOrderItem.getItemName() != null) {
            orderItemRepository.save(orderItemEntity);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(Math.toIntExact(id));
    }

    @Override
    public List<OrderItemEntity> getOrderItem(String id) {
        return orderItemRepository.findAllById(Long.valueOf(id));
    }

    @Override
    public List<OrderItemEntity> getAllOrderItems() {
        return orderItemRepository.findAll();
    }
}
