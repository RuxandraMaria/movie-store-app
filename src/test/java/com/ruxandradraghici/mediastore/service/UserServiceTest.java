package com.ruxandradraghici.mediastore.service;

import com.ruxandradraghici.mediastore.exceptions.UserAlreadyExistsException;
import com.ruxandradraghici.mediastore.model.User;
import com.ruxandradraghici.mediastore.repository.UserRepository;
import com.ruxandradraghici.mediastore.TestUtils;
import org.assertj.core.api.Assertions;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    @Rule
    public ExpectedException expectedException = ExpectedException.none();
    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    public void whenRegisterAnExistingUser_ThenThrowUserAlreadyExistsException() {
        User user = TestUtils.createUser("Maria", "Test@123!");

        when(userRepository.findByUsername(any(String.class))).thenReturn(user);

        expectedException.expect(UserAlreadyExistsException.class);
        expectedException.expectMessage("Username already in use: Maria");

        userService.register(user);

        verifyZeroInteractions(passwordEncoder);
        verify(userRepository, times(0)).save(user);
    }

    @Test
    public void whenRegisterAnNewUser_ThenSaveItInDb() {
        User user = TestUtils.createUser("Alex", "Test@123!");
        when(userRepository.findByUsername(any(String.class))).thenReturn(null);
        when(passwordEncoder.encode(any(String.class))).thenReturn("encodedPassword");

        userService.register(user);

        verify(userRepository).save(user);

        Assertions.assertThat(user).extracting("password")
                .contains("encodedPassword");
    }
}
