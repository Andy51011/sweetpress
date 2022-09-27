package com.org.sweetpress.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService{

    private final UsersRepository usersRepository;

    @Autowired
    public UsersServiceImpl(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public void createUser(UsersEntity usersEntity) {
        UsersEntity newUser = new UsersEntity(usersEntity.getUserId(),
                usersEntity.getFirstName(),
                usersEntity.getEmail(),
                usersEntity.getLastName(),
                usersEntity.getUsername(),
                usersEntity.getPassword());
        usersRepository.save(usersEntity);
    }

    @Override
    public void updateUser(Long id, UsersEntity usersEntity) {
//        usersRepository.deleteById(id);
    }

    @Override
    public void deleteUser(Long id) {
        usersRepository.deleteById(Math.toIntExact(id))

    }

    @Override
    public void getUser(Long id) {
        usersRepository.findAllById(id);
    }

    @Override
    public List<UsersEntity> getAllUser() {
        return usersRepository.findAll();
    }
}
