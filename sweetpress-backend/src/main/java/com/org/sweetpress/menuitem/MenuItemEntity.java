package com.org.sweetpress.menuitem;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@ToString

@NoArgsConstructor
@AllArgsConstructor
@Table(name="MenuItem")
public class MenuItemEntity {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="itemName", nullable=false)
    private String itemName;

    @Column(name="image", nullable=false)
    private String itemImage;

    @Column(name="itemDesc", nullable=false)
    private String itemDesc;

    @Column(name="itemPrice", nullable=false)
    private BigDecimal itemPrice;

}
