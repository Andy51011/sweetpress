package com.org.sweetpress.orderItem;

import java.util.List;

public interface OrderItemService {
    boolean createOrderItem(OrderItemEntity orderItemEntity);
    // post
    boolean updateOrderItem(String id, OrderItemEntity orderItemEntity);
    // patch

    // bool?
    void deleteOrderItem(Long id);

    List<OrderItemEntity> getOrderItem(String id);
    List<OrderItemEntity> getAllOrderItems();

}
