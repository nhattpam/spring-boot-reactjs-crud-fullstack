package com.nhattpam.springbootreacjscrud.controller;

import com.nhattpam.springbootreacjscrud.model.Users;
import com.nhattpam.springbootreacjscrud.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
//ket noi voi front end
@CrossOrigin
public class UserController {
    
    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    //function add User
    @PostMapping("/add")
    public Users addUser(@RequestBody Users newUser){
        return userRepository.save(newUser);
    }
    
    //function getAllUsers
    @GetMapping("/users")
    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }
}
