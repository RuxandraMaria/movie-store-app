package com.ruxandradraghici.mediastore.repository;

import com.ruxandradraghici.mediastore.model.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataMongoTest
public class UserRepositoryTest {
    public static final String ALEX = "Alex" + UUID.randomUUID();
    private final Set<String> MEDIAS = new HashSet<>(Arrays.asList("id1", "id2"));;
    private User USER = createUser(ALEX);

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() throws Exception {
        userRepository.save(USER);
    }

    @After
    public void tearDown() throws Exception {
        userRepository.delete(USER);
    }

    private User createUser(String username) {
        User user = new User();
        user.setUsername(username);
        user.setPassword("Test@123!");
        user.setFavouriteMovieIds(new HashSet<>(Arrays.asList("id1", "id2")));
        return user;
    }

    @Test
    public void givenAnUser_whenSearchForHim_thenFindUserInDB() {
        User alex = userRepository.findByUsername(ALEX);

        assertThat(alex).isNotNull();
        assertThat(alex).extracting("username", "password","favouriteMovieIds")
                .contains(ALEX, "Test@123!", MEDIAS);

    }
}
