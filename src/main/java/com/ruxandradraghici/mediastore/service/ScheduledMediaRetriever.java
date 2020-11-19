package com.ruxandradraghici.mediastore.service;

import com.ruxandradraghici.mediastore.model.Media;
import com.ruxandradraghici.mediastore.repository.MediaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduledMediaRetriever {
    private Logger log = LoggerFactory.getLogger(ScheduledMediaRetriever.class);
    private final OMDBDownloader downloader;
    private final MediaRepository repository;

    @Autowired
    public ScheduledMediaRetriever(OMDBDownloader downloader, MediaRepository repository) {
        this.downloader = downloader;
        this.repository = repository;

    }

    @Scheduled(fixedRateString = "${media-service.check-frequency}")
    public void fillDb() {
        log.info("Pushing data to DB");
        List<Media> allMedia = downloader.getAllMedia();
        allMedia.forEach(this::trySave);
    }

    private void trySave(Media media) {
        try {
            repository.save(media);
        } catch (Exception e) {
            log.debug("Error during update", e);
        }
    }
}
