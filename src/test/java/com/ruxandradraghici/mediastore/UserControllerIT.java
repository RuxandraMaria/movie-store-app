package com.ruxandradraghici.mediastore;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ruxandradraghici.mediastore.model.User;
import com.ruxandradraghici.mediastore.repository.UserRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource("classpath:application-test.properties")
@AutoConfigureMockMvc
public class UserControllerIT {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    private String username = "anca" + UUID.randomUUID();

    private User USER1 = TestUtils.createUser(username, "zcxzcvzxc");
    private User USER2 = TestUtils.createUser(username, "gdfhdxfh");

    @After
    public void tearDown() throws Exception {
//        User user = userRepository.findByUsername(USER1.getUsername());
//        userRepository.delete(user);
        mongoTemplate.dropCollection("users");
    }

    @Test
    public void whenRegisterAUser_thenCheckTheAccountWasCreated() throws Exception {
        mockMvc.perform(post("/register")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(USER1)))
                .andDo(print())
                .andExpect(status().isOk());

        User user = userRepository.findByUsername(username);

        assertThat(user.getUsername()).isEqualTo(username);
        assertThat(user.getFavouriteMovieIds()).contains("id1", "id2");
    }

    @Test
    public void whenRegisterAnExistingUser_thenReturnError() throws Exception {
        userRepository.save(USER1);

        MvcResult mvcResult = mockMvc.perform(post("/register")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(USER2)))
                .andDo(print())
                .andExpect(status().isConflict())
                .andReturn();

        String contentAsString = mvcResult.getResponse().getContentAsString();
        ApiError apiError = objectMapper.readValue(contentAsString, ApiError.class);

        assertThat(apiError).extracting("statusCode").contains(409);
    }
}