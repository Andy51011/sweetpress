package com.org.sweetpress.cart;

import com.org.sweetpress.orderItem.OrderItemEntity;
import com.org.sweetpress.users.UsersEntity;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name="cart")
public class CartEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cart_id")
    private Long cartId;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @OneToOne(mappedBy = "cart")
    private UsersEntity usersEntity;

    @OneToMany(mappedBy = "cart", cascade=CascadeType.ALL)
    private Set<OrderItemEntity> items;

}
