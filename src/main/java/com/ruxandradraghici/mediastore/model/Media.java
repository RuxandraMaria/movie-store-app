package com.ruxandradraghici.mediastore.model;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URI;
import java.time.LocalDate;
import java.util.Set;

@Document(collection = "media")
public class Media {

    public String id;
    @Indexed(unique = true)
    public String title;
    public LocalDate release;
    public URI imageUri;
    public String description;
    public String director;
    public Set<String> genres;
    public String type;
    public Set<String> actors;
    public Double averageRating;
}