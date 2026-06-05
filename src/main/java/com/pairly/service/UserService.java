package com.pairly.service;

import com.pairly.entity.User;
import java.util.List;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);
}