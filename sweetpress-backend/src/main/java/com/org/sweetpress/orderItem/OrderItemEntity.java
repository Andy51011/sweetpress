package com.org.sweetpress.orderItem;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString

@NoArgsConstructor
@AllArgsConstructor
@Table(name="orderItem")
public class OrderItemEntity {

    @Id
    @Column(name="id", nullable=false)
    private Integer id;

    @Column(name="itemName", nullable=false)
    private String itemName;

    @Column(name="itemQuantity", nullable=false)
    private int itemQuantity;

    @Column(name="itemDesc", nullable=false)
    private String itemDesc;

    @Column(name="itemPrice", nullable=false)
    private BigDecimal itemPrice;

}
