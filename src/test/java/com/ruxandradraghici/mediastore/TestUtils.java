package com.ruxandradraghici.mediastore;

import com.ruxandradraghici.mediastore.model.User;

import java.util.Arrays;
import java.util.HashSet;

public class TestUtils {

    public static User createUser(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setFavouriteMovieIds(new HashSet<>(Arrays.asList("id1", "id2")));
        return user;
    }
}
