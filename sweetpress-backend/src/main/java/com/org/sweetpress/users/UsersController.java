package com.org.sweetpress.users;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {

    private final UsersServiceImpl usersServiceImpl;

    public UsersController(UsersServiceImpl usersServiceImpl) {
        this.usersServiceImpl = usersServiceImpl;
    }

    // get all users
    @GetMapping
    public List<UsersEntity> findAllUsers() {
        return usersServiceImpl.getAllUsers();
    }

    // single user
    @GetMapping(value = "/{id}")
    public List<UsersEntity> getUser(@PathVariable String id) {
        return usersServiceImpl.getUser(id);
    }

    // create
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public boolean newUser(@RequestBody UsersEntity usersEntity) {
        return usersServiceImpl.createUser(usersEntity);
    }

    // update
    @PutMapping(value = "/{id}")
    public boolean updateUser(@PathVariable String id, @RequestBody UsersEntity usersEntity) {
        return usersServiceImpl.updateUser(id, usersEntity);
    }

    // delete
}
