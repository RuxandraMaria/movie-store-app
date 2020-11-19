package com.ruxandradraghici.mediastore.model;

import java.time.Duration;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public class Show extends Media {

    public Integer numberOfSeasons;
    public LocalDate finalSeasonDate;
    public Duration averageEpisodeRuntime;
    public Map<Integer, List<Episode>> seasons;
}