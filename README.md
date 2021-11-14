#  Project Trojan Films

## Author: 

Jiatong Li\
lijiaton@usc.edu

## Trojan Films

### Website

You can try it out first: https://lijiatong1997.com/TrojanFilms

### Introduction

Trojan Film a web application with user friendly layout that enables users to search for movies and TV series, browse details, watch trailers, share on social media, know about cast and crew, get recommended videos and so on. The original data for Trojan Film is from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api).

This project was developed with Angular and Bootstrap for frontend and Express.js for backend, hosted on Google Cloud Platform. During the development and tests, API server and web page server were fulfilled together by the same server running on GCP APP Engine. However, they are designed to operating separately (like right now, web pages are served by GitHub Pages and backend server are running on AWS). You can try it out locally on your machine by:
1. Starting the backend server
 * set your TMDB API key as an environment variable `TMDBAPI` (if you don't have one, it is free to register one)
 * `npm install` in the backend dictionary
 * `npm start`
2. Serving the frontend pages using Angular
 * `npm install` in the frontend dictionary
 * changing the variable `serverURL` in `frontend/src/app/services/gethomedata.service.ts` file to `http://localhost:8080` 
 * `ng serve`. 

### Video

The demonstration video of this project can be seen on YouTube:

[![Video Demo](https://img.youtube.com/vi/l58NvfWbW7c/maxresdefault.jpg)](https://www.youtube.com/watch?v=l58NvfWbW7c)
