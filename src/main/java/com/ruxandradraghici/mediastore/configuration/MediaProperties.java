package com.ruxandradraghici.mediastore.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("media-service")
public class MediaProperties {
    private String[] availableMedia;

    public String[] getAvailableMedia() {
        return availableMedia;
    }

    public void setAvailableMedia(String[] availableMedia) {
        this.availableMedia = availableMedia;
    }
}
