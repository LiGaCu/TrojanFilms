import { Component, OnDestroy, OnInit ,ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { GethomedataService } from '../../services/gethomedata.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCastComponent } from '../modal-cast/modal-cast.component';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit, OnDestroy {
  private navigationSubscription: any;
  public isMobile: boolean=false;

  public movie_id:any;
  public movie_video:any;
  public movie_video_url:any;
  public movie_details:any;
  public casts: any = [];
  public reviews: any = [];
  public recommendedMovies: any = [];
  public recommendedMovies_arr: any = [];
  public similarMovies: any = [];
  public similarMovies_arr: any = [];

  public twitterURL: string = "";
  public facebookURL: string = "";
  public twitter_icon: string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVRYhe2WTUhUURSAj6EUrSKD0t69b8YJU9oIunIhQtQihCByGWSRqxCKIoh+lkFGbXNRc+99M04IIRQF1sJ+Nm0qNArdJrUI0nnn3Dej/XhbqGM6r5m50wxBeOAsHlzO9517zoMLsBH/TRhT48rgBFP0jCucZYoyXNB7JnGw1TMN64+zVLoDjNkEAADtQ6aOSX22XPbu+8bhQj9hEk1oKiSeyBxt9UxDROg+5tG46+HNXAE3mTnCJBpH6Wu28O642bLcaTg8J0GLTNHi0rf/sfkh7sgV4ULfWjloK8EkDhaFr0maiIpsl6PwJBdB/5KAh+L3Q67CR00js7wYvC0+t41L+mYjwBUtMInGlf7b9iGzdakLgTdC56b8gdyihASXQY9d9zmJly3S1K8WSmT3F1igae7hhX1xvWu9QEToPnsBmtjz2GzOn6VHk0WW6DsX+MAV+hyXQQ8T6RiTeNi6e6nHQq8zKrJdTOrAqqCiH7YCrkQvD+5IfZ4n/WNcBP1c0nw5cy1ZwMPr+QJecLWa0LUL6A/kb3OhJaxwRuK6LfyXUv7T6ndPn0PhAABNcr6ZS/pUVQEPxR8FAAAa72YYF/p1tQRiqUxnQYEWaerdewutjkenmaQvlRWg5wXhAADRYbOTKdRVuQGRPlhUAADASQRXKg+n0ZLgAABgTA2XdLticEUzzojZXrrAioSiXlfh1F/O/WckTt128HXBRDrGFL6y/uUULXBFveWTjalxk/4hruiD/bWjjg6nD1gz24dMXSyV6XRFcIkpnC5z5u9YKt1RMjQqsl1c6jEucW710WifXKHPhH8Gxk2tdecwbmqZ0se5oBfWcI8mXRlcDnsxlRU8mW7iCTzFFN5xlP+GKZphUgfLj8+vrsIpJmiUeXix0ZvfWxHoRvzL+AXFnK2J8UgF/AAAAABJRU5ErkJggg==";
  public facebook_icon: string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYhWOwjpoRZBU5/ZV15Iz/9MRWEdNf20bODGAYCMvhjoic/ophoCyH4VEHUNUBzglz/k9ffuL/nYdv/v/69ec/OqCpA/wyF/2//+QdhqV0cYBN1Iz/l26+wGs5TR1Q1beToOU0dcD+k3cH1gEv33zGsOzlm8//i9q3/neMm41XL1Uc8OfPXwwHFLVvJUovVRyADRDyOc0dQKzeoekAcsCb918H1gFHzj4YWAfMXXN6YB1Q2rV9YB3gl7loGOWCUQeMOmDUAaMOoKoDrCKmvx4wB0TMeMlgGzkzgNIeMlkOiJjx0jpimh8AnpIM8LFP2hYAAAAASUVORK5CYII=";

  public inWatchList: boolean = false;
  private _add = new Subject<string>();
  private _remove = new Subject<string>();
  public addMessage = '';
  public removeMessage = '';
  @ViewChild('addAlert', {static: false}) addAlert!: NgbAlert;
  @ViewChild('removeAlert', {static: false}) removeAlert!: NgbAlert;

  constructor(private route: ActivatedRoute, private router: Router, private getdataService: GethomedataService, private sanitizer:DomSanitizer, private breakpointObserver: BreakpointObserver, private modalService: NgbModal) { 
    
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

    this.breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });

    this._add.subscribe(message => this.addMessage = message);
    this._add.pipe(debounceTime(5000)).subscribe(() => {
      if (this.addAlert) {
        this.addAlert.close();
      }
    });

    this._remove.subscribe(message => this.removeMessage = message);
    this._remove.pipe(debounceTime(5000)).subscribe(() => {
      if (this.removeAlert) {
        this.removeAlert.close();
      }
    });
  }

  ngOnInit(): void {
    this.initialiseInvites();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  initialiseInvites() {
    let bothloaded = 0;
    this.twitterURL = "";
    this.facebookURL = "";
    // Set default values and re-fetch any data you need.
    this.movie_id = this.route.snapshot.paramMap.get('movie_id');

    this.getdataService.getVideoMovies(this.movie_id).subscribe(res =>{
      this.movie_video = res;
      this.movie_video_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie_video.link);
      if(++bothloaded==2){
        this.generateTwitterFacebook();
      }
    });

    this.getdataService.getDetailsMovies(this.movie_id).subscribe(res =>{
      this.movie_details = res;
      let p_date = new Date(this.movie_details.release_date);
      this.movie_details.year = p_date.getFullYear();
      this.movie_details.genres_str = "";
      for(let i=0;i<this.movie_details.genres.length;i++){
        this.movie_details.genres_str += this.movie_details.genres[i];
        if(i!=this.movie_details.genres.length-1){
          this.movie_details.genres_str += ", "
        }
      }
      this.movie_details.lang_str = "";
      for(let i=0;i<this.movie_details.spoken_languages.length;i++){
        this.movie_details.lang_str += this.movie_details.spoken_languages[i];
        if(i!=this.movie_details.spoken_languages.length-1){
          this.movie_details.lang_str += ", "
        }
      }
      this.refresh_continuelist();
      if(++bothloaded==2){
        this.generateTwitterFacebook();
      }
    });

    this.getdataService.getCastsMovies(this.movie_id).subscribe(res =>{
      this.casts = res;
      this.casts = this.casts.results;
    });

    this.getdataService.getReviewsMovies(this.movie_id).subscribe(res =>{
      this.reviews = res;
      this.reviews = this.reviews.results;
      for(let i=0;i<this.reviews.length;i++){
        this.reviews[i].created_at = new Date(this.reviews[i].created_at); 
      }
    });

    this.getdataService.getRecommendedMovies(this.movie_id).subscribe(res =>{
      this.recommendedMovies = res;
      this.recommendedMovies = this.recommendedMovies.results;
      this.tagMovies(this.recommendedMovies);
      this.organize(this.recommendedMovies,this.recommendedMovies_arr);
    });

    this.getdataService.getSimilarMovies(this.movie_id).subscribe(res =>{
      this.similarMovies = res;
      this.similarMovies = this.similarMovies.results;
      this.tagMovies(this.similarMovies);
      this.organize(this.similarMovies,this.similarMovies_arr);
    });
    this.inWatchList = false;
  }

  organize(original_data:Array<object>, group_data:Array<Array<object>>){
    let j = -1;
      for (let i = 0; i < original_data.length; i++) {
        if (i % 6 == 0) {
            j++;
            group_data[j] = [];
            group_data[j].push(original_data[i]);
        }
        else {
            group_data[j].push(original_data[i]);
        }
      }
  }
  tagMovies(original_data:Array<any>){
    for(let video of original_data){
      video.isTVshow = false;
    }
  }

  openModal(person_id:any, backup_img:any){
    const modalRef = this.modalService.open(ModalCastComponent, { size: 'xl' });
    modalRef.componentInstance.person_id = person_id;
    modalRef.componentInstance.backup_img = backup_img;
  }

  refresh_continuelist(){
    let continuelist_str = localStorage.getItem("continuelist");
    let curr_movie = "movie_" + this.movie_id;
    if(!this.movie_details.title){
      this.movie_details.title = " ";
    }
    let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;

    if(continuelist_str){
      let continuelist = continuelist_str.split(",");
      continuelist = continuelist.filter((movie_item)=>{ return movie_item!=curr_movie; });
      if(continuelist.length>=24){
        // Delete videos more than 24
        let needdelete = continuelist.shift();
        if(needdelete){
          let watchlist_str = localStorage.getItem("watchlist");
          if( !watchlist_str || !watchlist_str.includes(needdelete)){
            localStorage.removeItem(needdelete);
          }
        }
      }
      continuelist.push(curr_movie);
      localStorage.setItem("continuelist", continuelist.join(","));
      localStorage.setItem(curr_movie, curr_movie_details);
    }else{
      localStorage.setItem("continuelist", curr_movie);
      localStorage.setItem(curr_movie, curr_movie_details);
    }
  }
  add_watchlist(){
    let watchlist_str = localStorage.getItem("watchlist");
    let curr_movie = "movie_" + this.movie_id;
    if(!this.movie_details.title){
      this.movie_details.title = " ";
    }
    let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;
    if(watchlist_str){
      let watchlist = watchlist_str.split(",");
      watchlist = watchlist.filter((movie_item)=>{ return movie_item!=curr_movie; });
      watchlist.push(curr_movie);
      localStorage.setItem("watchlist", watchlist.join(","));
      localStorage.setItem(curr_movie, curr_movie_details);
    }else{
      localStorage.setItem("watchlist", curr_movie);
      localStorage.setItem(curr_movie, curr_movie_details);
    }
    this.inWatchList = true;
    this._add.next(`Added to watchlist.`);
  }
  remove_watchlist(){
    let watchlist_str = localStorage.getItem("watchlist");
    let curr_movie = "movie_" + this.movie_id;
    if(!this.movie_details.title){
      this.movie_details.title = " ";
    }
    let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;
    if(watchlist_str){
      let watchlist = watchlist_str.split(",");
      watchlist = watchlist.filter((movie_item)=>{ return movie_item!=curr_movie; });
      localStorage.setItem("watchlist", watchlist.join(","));
      let continuelist_str = localStorage.getItem("continuelist");
      if( !continuelist_str || !continuelist_str.includes(curr_movie)){
        localStorage.removeItem(curr_movie);
      }
    }
    this.inWatchList = false;
    this._remove.next(`Removed from watchlist.`);
  }
  generateTwitterFacebook(){
    this.twitterURL = `https://twitter.com/intent/tweet?text=Watch ${this.movie_details.title}&url=${this.movie_video.link}&hashtags=USC,CSCI571,FightOn`;
    this.facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${this.movie_video.link}`;
  }
}
