package com.org.sweetpress.users;

import com.org.sweetpress.cart.CartEntity;
import com.org.sweetpress.orderItem.OrderItemEntity;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.ValueGenerationType;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user")
public class UsersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;
    // reference email entity
    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    // define relation to order item, email, and cart
    @OneToOne
    @JoinColumn(name = "cartId", referencedColumnName = "cart_id")
    private CartEntity cart;


}
