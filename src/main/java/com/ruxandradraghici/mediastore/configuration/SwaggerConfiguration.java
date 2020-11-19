package com.ruxandradraghici.mediastore.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.BasicAuth;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

    private String PROJECT_VERSION = "1.0";

    @Bean
    public Docket projectApi() {
        List<SecurityScheme> schemeList = new ArrayList<>();
        schemeList.add(new BasicAuth("basicAuthApi"));

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .securitySchemes(schemeList)
                .select()
                .paths(PathSelectors.regex("(\\/register$|\\/media-service\\/.*)"))
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("REST API application")
                .description("REST API interface contract")
                .version(PROJECT_VERSION)
                .build();
    }

}

