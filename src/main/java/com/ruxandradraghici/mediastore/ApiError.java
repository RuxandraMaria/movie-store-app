package com.ruxandradraghici.mediastore;

import java.time.LocalDateTime;

public class ApiError {
    private int statusCode;
    private String message;
    private String details;
    private LocalDateTime dateTime;

    public ApiError() {
    }

    public ApiError(int statusCode, String message, String details, LocalDateTime dateTime) {
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
        this.dateTime = dateTime;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
