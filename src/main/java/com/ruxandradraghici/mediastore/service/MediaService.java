package com.ruxandradraghici.mediastore.service;

import com.ruxandradraghici.mediastore.model.Media;
import com.ruxandradraghici.mediastore.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MediaService {

    private final MediaRepository mediaRepository;

    @Autowired
    public MediaService(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    public List<Media> getMediaList() {
        return mediaRepository.findAll();
    }

    public List<Media> getMediaByTitle(String title) {
        return mediaRepository.findAllByTitleMatchesRegex("(?i).*" + title + ".*");
    }

    public Media getMediaById(String id) {
        return mediaRepository.findMediaById(id);
    }

}
