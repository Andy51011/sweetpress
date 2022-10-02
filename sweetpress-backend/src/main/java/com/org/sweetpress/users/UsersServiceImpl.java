package com.org.sweetpress.users;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService{

    private final UsersRepository usersRepository;

    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public boolean createUser(UsersEntity usersEntity) {
        if (usersEntity.getId() != null) {
            UsersEntity newUser = new UsersEntity(usersEntity.getId(),
                    usersEntity.getFirstName(),
                    usersEntity.getEmail(),
                    usersEntity.getLastName(),
                    usersEntity.getUsername(),
                    usersEntity.getPassword());
            usersRepository.save(usersEntity);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean updateUser(String userId, UsersEntity usersEntity) {
        UsersEntity currUser = usersRepository.getReferenceById(Integer.valueOf(userId));
        if (currUser.getFirstName() != null) {
            usersRepository.save(usersEntity);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void deleteUser(Long id) {
        usersRepository.deleteById(Math.toIntExact(id));
    }

    @Override
    public List<UsersEntity> getUser(String id) {
      return usersRepository.findAllById(Long.valueOf(id));
    }

    @Override
    public List<UsersEntity> getAllUsers() {
        return usersRepository.findAll();
    }
}
