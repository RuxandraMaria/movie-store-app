package com.ruxandradraghici.mediastore.repository;

import com.ruxandradraghici.mediastore.model.Media;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface MediaRepository extends MongoRepository<Media, String> {
    List<Media> findAllByTitleMatchesRegex(String title);

    Media findMediaById(String id);

    List<Media> findAllByTypeMatchesRegex(String type);

}
