package com.ruxandradraghici.mediastore;

import com.ruxandradraghici.mediastore.exceptions.UserAlreadyExistsException;
import com.ruxandradraghici.mediastore.exceptions.UserNotLoggedInException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(UserNotLoggedInException.class)
    public final ResponseEntity<ApiError> handleUserNotLoggedIn(UserNotLoggedInException ex, WebRequest request) {
        ApiError apiError = new ApiError(HttpStatus.FORBIDDEN.value(), ex.getMessage(),
                request.getDescription(false), LocalDateTime.now());
        return new ResponseEntity<>(apiError, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public final ResponseEntity<ApiError> handleExistingObjects(UserAlreadyExistsException ex, WebRequest request) {
        ApiError apiError = new ApiError(HttpStatus.CONFLICT.value(), ex.getMessage(),
                request.getDescription(false), LocalDateTime.now());
        return new ResponseEntity<>(apiError, HttpStatus.CONFLICT);
    }


    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ApiError> handleGenericException(Exception ex, WebRequest request) {
        ApiError apiError = new ApiError(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(),
                request.getDescription(false), LocalDateTime.now());
        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
