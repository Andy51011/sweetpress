package com.org.sweetpress.users;

import java.util.List;

public interface UsersService {
    void createUser(UsersEntity usersEntity);
    boolean updateUser(Long id, UsersEntity usersEntity);
    void deleteUser(Long id);
    List<UsersEntity> getUser(String id);
    List<UsersEntity> getAllUsers();
}
