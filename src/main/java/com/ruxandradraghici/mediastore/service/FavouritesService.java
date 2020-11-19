package com.ruxandradraghici.mediastore.service;

import com.ruxandradraghici.mediastore.model.Media;
import com.ruxandradraghici.mediastore.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FavouritesService {

    private final UserService userService;

    private final MediaService mediaService;

    @Autowired
    public FavouritesService(MediaService mediaService, UserService userService) {
        this.mediaService = mediaService;
        this.userService = userService;
    }

    public void addToFavourites(String mediaId) {
        User user = userService.currentUser();
        Set<String> favouriteMovieIds = user.getFavouriteMovieIds();
        if(favouriteMovieIds == null) {
            favouriteMovieIds = new HashSet<>();
        }
        if(favouriteMovieIds.contains(mediaId)) {
            throw new RuntimeException("Media id already exists!");
        }
        favouriteMovieIds.add(mediaId);
        user.setFavouriteMovieIds(favouriteMovieIds);
        userService.saveUser(user);
    }

    public void removeFavourite(String movieId) {
        User user = userService.currentUser();
        Set<String> favouriteMovieIds = user.getFavouriteMovieIds();
        if(favouriteMovieIds == null) {
            return;
        }
        if(favouriteMovieIds.remove(movieId)) {
            user.setFavouriteMovieIds(favouriteMovieIds);
            userService.saveUser(user);
        }
    }

    public List<Media> getFavourites() {
        User user = userService.currentUser();
        Set<String> favouriteMovieIds = user.getFavouriteMovieIds();
        if(favouriteMovieIds == null || favouriteMovieIds.isEmpty()) {
            return new LinkedList<>();
        }
        List<Media> set = new ArrayList<>();
        Iterator<String> it = favouriteMovieIds.iterator();
        while(it.hasNext())
            set.add(mediaService.getMediaById(it.next()));
        return set;
    }

}
