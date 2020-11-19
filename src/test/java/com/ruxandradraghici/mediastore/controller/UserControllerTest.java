package com.ruxandradraghici.mediastore.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ruxandradraghici.mediastore.model.User;
import com.ruxandradraghici.mediastore.service.UserService;
import com.ruxandradraghici.mediastore.TestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private UserService userService;

    @Test
    public void whenRegisterANewUser_thenReturn200() throws Exception {
        User user = TestUtils.createUser("ana", "password");

        mockMvc.perform(post("/register")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(user)))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void whenRegisterANewUserWithInvalidPassword_thenReturn400() throws Exception {
        User user = TestUtils.createUser("ana", "");

        mockMvc.perform(post("/register")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(user)))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }
}
