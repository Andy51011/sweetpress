package com.org.sweetpress.users;

import com.org.sweetpress.cart.CartEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users")
public class UsersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
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

    // access level

    // define relation to order item, email, and cart
    @OneToOne
    @JoinColumn(name = "cartId", referencedColumnName = "cart_id")
    private CartEntity cart;


}
