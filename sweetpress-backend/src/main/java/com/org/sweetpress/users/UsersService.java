package com.org.sweetpress.users;

import org.springframework.stereotype.Service;

public interface UsersService {
    public abstract void createUser(UsersEntity usersEntity);
    public abstract void updateUser(Long id, UsersEntity usersEntity);
    public abstract void deleteUser(Long id);
    public abstract void getUser(Long id);
}
