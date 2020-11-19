package com.ruxandradraghici.mediastore.controller;

import com.ruxandradraghici.mediastore.model.Media;
import com.ruxandradraghici.mediastore.service.FavouritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

import static com.ruxandradraghici.mediastore.configuration.MediaConstants.API_V1;

@RestController
@RequestMapping(API_V1)
@CrossOrigin(maxAge = 3600)
public class FavouritesController {

    private FavouritesService favouritesService;

    @Autowired
    public FavouritesController(FavouritesService favouritesService) {
        this.favouritesService = favouritesService;
    }

    @DeleteMapping(value = "/favourites")
    public void removeFavourite(@RequestParam String mediaId) {
        favouritesService.removeFavourite(mediaId);
    }

    @PutMapping(value = "/favourites")
    public void addFavourite(@RequestParam String mediaId) {
        favouritesService.addToFavourites(mediaId);
    }

    @GetMapping(value = "/favourites", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Media> getFavourites() {
        return favouritesService.getFavourites();
    }


}
