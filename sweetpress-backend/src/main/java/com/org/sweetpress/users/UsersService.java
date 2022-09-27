package com.org.sweetpress.users;

import java.util.List;

public interface UsersService {
    public abstract void createUser(UsersEntity usersEntity);
    public abstract void updateUser(Long id, UsersEntity usersEntity);
    public abstract void deleteUser(Long id);
    public abstract void getUser(Long id);
    public abstract List<UsersEntity> getAllUser();
}
