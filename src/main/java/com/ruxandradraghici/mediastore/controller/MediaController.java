package com.ruxandradraghici.mediastore.controller;

import com.ruxandradraghici.mediastore.model.Media;
import com.ruxandradraghici.mediastore.service.MediaService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static com.ruxandradraghici.mediastore.configuration.MediaConstants.API_V1;
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(API_V1)
public class MediaController {
    private MediaService service;

    public MediaController(MediaService service) {
        this.service = service;
    }

    @GetMapping(value = "/GetMedia", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Media> getMyMedia(@RequestParam(required = false) String title) {
        if (title != null) {
            return service.getMediaByTitle(title);
        }
        return service.getMediaList();
    }

    @GetMapping(value = "/GetMediaByType", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Media> getMediaByType(@RequestParam(required = true) String type) {
        return  service.getMediaList().stream()
                .filter(item -> item.type.equals(type))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/GetMediaByGenre", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Media> getMediaByGenre(@RequestParam(required = true) String genre) {
        List<Media> my =  service.getMediaList().stream()
                .filter(item -> item.genres.contains(genre))
                .collect(Collectors.toList());
        System.out.println(genre);
        System.out.println(my);
        return my;
    }


}
