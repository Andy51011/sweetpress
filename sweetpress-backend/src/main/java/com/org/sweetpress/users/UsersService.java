package com.org.sweetpress.users;

import java.util.List;

public interface UsersService {
    boolean createUser(UsersEntity usersEntity);
    boolean updateUser(String id, UsersEntity usersEntity);
    void deleteUser(Long id);
    List<UsersEntity> getUser(String id);
    List<UsersEntity> getAllUsers();
}
