package com.org.sweetpress.users;

import lombok.*;
import lombok.NoArgsConstructor;
import javax.persistence.Table;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="users")
public class UsersEntity {

    @Id
    @Column(name = "userId", nullable = false)
    private Long userId;

    private String firstName;
    private String lastName;
    // reference email entity
    private String email;
    private String username;
    private String password;

    public Long getuserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
