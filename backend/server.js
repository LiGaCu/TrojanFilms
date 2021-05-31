"use strict";

const axios = require('axios');
const API_KEY = process.env.TMDBAPI;
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,'dist/frontend')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// For Search
app.get('/search_multi', function(req, res) {
    let search_query = req.query.query;
    axios.get("https://api.themoviedb.org/3/search/multi",{
        params:{
            "api_key": API_KEY,
            "language": "en-US",
            "query": search_query
        }
    })
    .then(function (response) {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<7;i++){
            if(data[i].backdrop_path && (data[i].media_type=="tv" || data[i].media_type=="movie")){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["media_type"] = data[i].media_type;
                if(data[i].media_type=="tv"){
                    temp_dict["name"] = data[i].name || null;
                }else{
                    temp_dict["name"] = data[i].title || null;
                }
                temp_dict["backdrop_path"] = "https://image.tmdb.org/t/p/w500" + data[i].backdrop_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});

// For Movies
app.get('/trending_movie', function(req, res) {
    axios.get("https://api.themoviedb.org/3/trending/movie/day",{
        params:{ "api_key": API_KEY, }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_top_rated', function(req, res) {
    axios.get("https://api.themoviedb.org/3/movie/top_rated",{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_now_playing', function(req, res) {
    axios.get("https://api.themoviedb.org/3/movie/now_playing",{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<5;i++){
            if(data[i].backdrop_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["backdrop_path"] = "https://image.tmdb.org/t/p/original" + data[i].backdrop_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_popular', function(req, res) {
    axios.get("https://api.themoviedb.org/3/movie/popular",{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_recommended/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": movie_id, "results": []};
        for(let i=0; i<data.length && response.results.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_similar/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": movie_id, "results": []};
        for(let i=0; i<data.length && response.results.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["title"] = data[i].title || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_videos/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {};
        for(let i=0; i<data.length;i++){
            if(data[i].site == "YouTube" && data[i].type == "Trailer"){
                response["name"] = data[i].name || null;
                response["link"] = "https://www.youtube.com/embed/" + data[i].key;
                response["type"] = data[i].type;
                break;
            }else if(!response.link && data[i].site == "YouTube" && data[i].type == "Teaser"){
                response["name"] = data[i].name || null;
                response["link"] = "https://www.youtube.com/embed/" + data[i].key;
                response["type"] = data[i].type;
            }
        }
        if(!response.link){
            response["name"] = null;
            response["link"] = "https://www.youtube.com/embed/tzkWB85ULJY";
            response["type"] = null;
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_details/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data;
        response = {};
        response["title"] = data.title || null;
        response["genres"] = []
        for(let genre of data.genres){
            if(genre.name){ response["genres"].push(genre.name); }
        }
        response["spoken_languages"] = []
        for(let language of data.spoken_languages){
            if(language.name){ response["spoken_languages"].push(language.name); }
        }
        response["release_date"] = data.release_date || null;
        response["runtime"] = data.runtime || null;
        response["overview"] = data.overview || null;
        response["vote_average"] = data.vote_average || null;
        response["tagline"] = data.tagline || null;
        if(data.poster_path){
            response["poster_path"] = "https://image.tmdb.org/t/p/w500" + data.poster_path;
        }else{
            response["poster_path"] = "https://cinemaone.net/images/movie_placeholder.png";
        }
        
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_reviews/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": movie_id, "results": []};
        for(let i=0; i<data.length && response.results.length<10; i++){
            let temp_dict = {};
            temp_dict["author"] = data[i].author || null;
            temp_dict["content"] = data[i].content || null;
            temp_dict["created_at"] = data[i].created_at || null;
            temp_dict["url"] = data[i].url || null;
            if(data[i].author_details){
                if(data[i].author_details.avatar_path){
                    if(data[i].author_details.avatar_path.includes("http")){
                        temp_dict["avatar_path"] = data[i].author_details.avatar_path.substring(1);
                    }else{
                        temp_dict["avatar_path"] = "https://image.tmdb.org/t/p/original" + data[i].author_details.avatar_path;
                    }
                }
                temp_dict["rating"] = data[i].author_details.rating || 0;
            }
            if(!temp_dict.avatar_path){
                temp_dict["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
            }
            response.results.push(temp_dict);
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/movie_credits/:movie_id', function(req, res) {
    let movie_id = req.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.cast || [];
        response = {"id": movie_id, "results": []};
        for(let i=0; i<data.length; i++){
            if(data[i].profile_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id || null;
                temp_dict["name"] = data[i].name || null;
                temp_dict["character"] = data[i].character || null;
                temp_dict["profile_path"] = "https://image.tmdb.org/t/p/w500/" + data[i].profile_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

// For TV Shows
app.get('/trending_tv', function(req, res) {
    axios.get("https://api.themoviedb.org/3/trending/tv/day",{
        params:{ "api_key": API_KEY, }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["name"] = data[i].name || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_top_rated', function(req, res) {
    axios.get("https://api.themoviedb.org/3/tv/top_rated",{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["name"] = data[i].name || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_popular', function(req, res) {
    axios.get("https://api.themoviedb.org/3/tv/popular",{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = [];
        for(let i=0; i<data.length && response.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["name"] = data[i].name || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_recommended/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}/recommendations`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": tvshow_id, "results": []};
        for(let i=0; i<data.length && response.results.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["name"] = data[i].name || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_similar/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}/similar`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": tvshow_id, "results": []};
        for(let i=0; i<data.length && response.results.length<24;i++){
            if(data[i].poster_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id;
                temp_dict["name"] = data[i].name || null;
                temp_dict["poster_path"] = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_videos/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}/videos`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {};
        for(let i=0; i<data.length;i++){
            if(data[i].site == "YouTube" && data[i].type == "Trailer"){
                response["name"] = data[i].name || null;
                response["link"] = "https://www.youtube.com/embed/" + data[i].key;
                response["type"] = data[i].type;
                break;
            }else if(!response.link && data[i].site == "YouTube" && data[i].type == "Teaser"){
                response["name"] = data[i].name || null;
                response["link"] = "https://www.youtube.com/embed/" + data[i].key;
                response["type"] = data[i].type;
            }
        }
        if(!response.link){
            response["name"] = null;
            response["link"] = "https://www.youtube.com/embed/tzkWB85ULJY";
            response["type"] = null;
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_details/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data;
        response = {};
        response["name"] = data.name || null;
        response["genres"] = []
        for(let genre of data.genres){
            if(genre.name){ response["genres"].push(genre.name); }
        }
        response["spoken_languages"] = []
        for(let language of data.spoken_languages){
            if(language.name){ response["spoken_languages"].push(language.name); }
        }
        response["first_air_date"] = data.first_air_date || null;
        if(data.episode_run_time && data.episode_run_time.length){
            response["episode_run_time"] = data.episode_run_time[0] || null;
        }
        response["overview"] = data.overview || null;
        response["vote_average"] = data.vote_average || null;
        response["tagline"] = data.tagline || null;
        if(data.poster_path){
            response["poster_path"] = "https://image.tmdb.org/t/p/w500" + data.poster_path;
        }else{
            response["poster_path"] = "https://cinemaone.net/images/movie_placeholder.png";
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_reviews/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}/reviews`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.results || [];
        response = {"id": tvshow_id, "results": []};
        for(let i=0; i<data.length && response.results.length<10; i++){
            let temp_dict = {};
            temp_dict["author"] = data[i].author || null;
            temp_dict["content"] = data[i].content || null;
            temp_dict["created_at"] = data[i].created_at || null;
            temp_dict["url"] = data[i].url || null;
            if(data[i].author_details){
                if(data[i].author_details.avatar_path){
                    if(data[i].author_details.avatar_path.includes("http")){
                        temp_dict["avatar_path"] = data[i].author_details.avatar_path.substring(1);
                    }else{
                        temp_dict["avatar_path"] = "https://image.tmdb.org/t/p/original" + data[i].author_details.avatar_path;
                    }
                }
                temp_dict["rating"] = data[i].author_details.rating || 0;
            }
            if(!temp_dict.avatar_path){
                temp_dict["avatar_path"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
            }
            response.results.push(temp_dict);
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/tv_credits/:tvshow_id', function(req, res) {
    let tvshow_id = req.params.tvshow_id;
    axios.get(`https://api.themoviedb.org/3/tv/${tvshow_id}/credits`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data.cast || [];
        response = {"id": tvshow_id, "results": []};
        for(let i=0; i<data.length; i++){
            if(data[i].profile_path){
                let temp_dict = {};
                temp_dict["id"] = data[i].id || null;
                temp_dict["name"] = data[i].name || null;
                temp_dict["character"] = data[i].character || null;
                temp_dict["profile_path"] = "https://image.tmdb.org/t/p/w500/" + data[i].profile_path;
                response.results.push(temp_dict);
            }
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

// For Person
app.get('/person/:person_id', function(req, res) {
    let person_id = req.params.person_id;
    axios.get(`https://api.themoviedb.org/3/person/${person_id}`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data;
        response = {};
        response["birthday"] = data.birthday || null;
        let gender_dict = {0:"undefined", 1:"female", 2:"male"};
        response["gender"] = gender_dict[data.gender] || "undefined";
        response["name"] = data.name || null;
        response["homepage"] = data.homepage || null;
        response["also_known_as"] = data.also_known_as || [];
        response["known_for_department"] = data.known_for_department || null;
        response["biography"] = data.biography || null;
        response["place_of_birth"] = data.place_of_birth;
        if(data.profile_path){
            response["profile_path"] = "https://image.tmdb.org/t/p/w500/" + data.profile_path;
        }else{
            response["profile_path"] = null;
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.get('/person_external_ids/:person_id', function(req, res) {
    let person_id = req.params.person_id;
    axios.get(`https://api.themoviedb.org/3/person/${person_id}/external_ids`,{
        params:{ 
            "api_key": API_KEY,
            "language": "en-US",
            "page": 1
        }
    })
    .then( response => {
        let data = response.data;
        response = {};
        if(data.imdb_id){
            response["imdb_id"] = "imdb.com/name/" + data.imdb_id;
        }else{
            response["imdb_id"] = null;
        }
        if(data.facebook_id){
            response["facebook_id"] = "facebook.com/" + data.facebook_id;
        }else{
            response["facebook_id"] = null;
        }
        if(data.instagram_id){
            response["instagram_id"] = "instagram.com/" + data.instagram_id;
        }else{
            response["instagram_id"] = null;
        }
        if(data.twitter_id){
            response["twitter_id"] = "twitter.com/" + data.twitter_id;
        }else{
            response["twitter_id"] = null;
        }
        res.json(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.use('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`Backend Application listening at http://localhost:${PORT}`);
});