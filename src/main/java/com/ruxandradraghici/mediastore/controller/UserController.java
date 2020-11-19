package com.ruxandradraghici.mediastore.controller;

import com.ruxandradraghici.mediastore.model.User;
import com.ruxandradraghici.mediastore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(maxAge = 3600)
@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/register")
    public void register(@Valid @RequestBody User user) {
        userService.register(user);
    }

}
