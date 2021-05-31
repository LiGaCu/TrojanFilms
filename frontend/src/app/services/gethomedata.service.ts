import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GethomedataService {
  serverURL: string = "https://x-planet-310205.wl.r.appspot.com";
  //serverURL: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getPlayingMovies(){
    let URL = this.serverURL + "/movie_now_playing";
    return this.httpClient.get(URL);
  }
  getPopularMovies(){
    let URL = this.serverURL + "/movie_popular";
    return this.httpClient.get(URL);
  }
  getTopRatedMovies(){
    let URL = this.serverURL + "/movie_top_rated";
    return this.httpClient.get(URL);
  }
  getTrendingMovies(){
    let URL = this.serverURL + "/trending_movie";
    return this.httpClient.get(URL);
  }
  getPopularTVshows(){
    let URL = this.serverURL + "/tv_popular";
    return this.httpClient.get(URL);
  }
  getTopRatedTVshows(){
    let URL = this.serverURL + "/tv_top_rated";
    return this.httpClient.get(URL);
  }
  getTrendingTVshows(){
    let URL = this.serverURL + "/trending_tv";
    return this.httpClient.get(URL);
  }

  // For Movie Page
  getDetailsMovies(movie_id:string){
    let URL = this.serverURL + "/movie_details/" + movie_id;
    return this.httpClient.get(URL);
  }

  getVideoMovies(movie_id:string){
    let URL = this.serverURL + "/movie_videos/" + movie_id;
    return this.httpClient.get(URL);
  }

  getCastsMovies(movie_id:string){
    let URL = this.serverURL + "/movie_credits/" + movie_id;
    return this.httpClient.get(URL);
  }

  getReviewsMovies(movie_id:string){
    let URL = this.serverURL + "/movie_reviews/" + movie_id;
    return this.httpClient.get(URL);
  }
  getRecommendedMovies(movie_id:string){
    let URL = this.serverURL + "/movie_recommended/" + movie_id;
    return this.httpClient.get(URL);
  }

  getSimilarMovies(movie_id:string){
    let URL = this.serverURL + "/movie_similar/" + movie_id;
    return this.httpClient.get(URL);
  }
  // For TVshow Page
  getDetailsTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_details/" + tv_id;
    return this.httpClient.get(URL);
  }

  getVideoTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_videos/" + tv_id;
    return this.httpClient.get(URL);
  }

  getCastsTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_credits/" + tv_id;
    return this.httpClient.get(URL);
  }

  getReviewsTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_reviews/" + tv_id;
    return this.httpClient.get(URL);
  }
  getRecommendedTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_recommended/" + tv_id;
    return this.httpClient.get(URL);
  }

  getSimilarTVshows(tv_id:string){
    let URL = this.serverURL + "/tv_similar/" + tv_id;
    return this.httpClient.get(URL);
  }
  // For Person Modal
  getDetailsPerson(person_id:string){
    let URL = this.serverURL + "/person/" + person_id;
    return this.httpClient.get(URL);
  }
  getExternalsPerson(person_id:string){
    let URL = this.serverURL + "/person_external_ids/" + person_id;
    return this.httpClient.get(URL);
  }

  // For Search
  getMultiSearch(term: string){
    if (term.trim() === "") {
      return of([]);
    }
    let URL = this.serverURL + "/search_multi";
    return this.httpClient.get(URL,{params:{"query":term}});
  }
}
