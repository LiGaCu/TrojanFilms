import { Component, OnInit } from '@angular/core';
import { GethomedataService } from '../../services/gethomedata.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public continuelist: any = [];
  public continuelist_arr: any = [];

  public playingMovies: any = [];
  public popularMovies: any = [];
  public popularMovies_arr: any = [];
  public topRatedMovies: any = [];
  public topRatedMovies_arr: any = [];
  public trendingMovies: any = [];
  public trendingMovies_arr: any = [];

  public popularTVshows: any = [];
  public popularTVshows_arr: any = [];
  public topRatedTVshows: any = [];
  public topRatedTVshows_arr: any = [];
  public trendingTVshows: any = [];
  public trendingTVshows_arr: any = [];

  public isMobile: boolean=false;

  constructor(private gethomedataService: GethomedataService,breakpointObserver: BreakpointObserver) {  
    breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });
  }

  ngOnInit(): void {
    this.fetchData();
    this.getcontinuelist();
    this.organize(this.continuelist,this.continuelist_arr);
  }

  fetchData(){
    this.gethomedataService.getPlayingMovies().subscribe(res =>{
      this.playingMovies = res;
      this.tagMovies(this.playingMovies);
    });

    this.gethomedataService.getPopularMovies().subscribe(res =>{
      this.popularMovies = res;
      this.tagMovies(this.popularMovies);
      this.organize(this.popularMovies,this.popularMovies_arr);
    });

    this.gethomedataService.getTopRatedMovies().subscribe(res =>{
      this.topRatedMovies = res;
      this.tagMovies(this.topRatedMovies);
      this.organize(this.topRatedMovies,this.topRatedMovies_arr);
    });

    this.gethomedataService.getTrendingMovies().subscribe(res =>{
      this.trendingMovies = res;
      this.tagMovies(this.trendingMovies);
      this.organize(this.trendingMovies,this.trendingMovies_arr);
    });

    this.gethomedataService.getPopularTVshows().subscribe(res =>{
      this.popularTVshows = res;
      this.tagTVshows(this.popularTVshows);
      this.organize(this.popularTVshows,this.popularTVshows_arr);
      
    });

    this.gethomedataService.getTopRatedTVshows().subscribe(res =>{
      this.topRatedTVshows = res;
      this.tagTVshows(this.topRatedTVshows);
      this.organize(this.topRatedTVshows,this.topRatedTVshows_arr);
    });

    this.gethomedataService.getTrendingTVshows().subscribe(res =>{
      this.trendingTVshows = res;
      this.tagTVshows(this.trendingTVshows);
      this.organize(this.trendingTVshows,this.trendingTVshows_arr);
    });
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
  tagTVshows(original_data:Array<any>){
    for(let video of original_data){
      video.isTVshow = true;
    }
  }
  getcontinuelist(){
    let continuelist_keys_str = localStorage.getItem("continuelist");
    if(continuelist_keys_str){
      let continuelist_keys = continuelist_keys_str.split(",");
      for(let video_key of continuelist_keys){
        let  video_id = video_key.split("_")[1];
        let video_paras_str = localStorage.getItem(video_key);
        if(video_paras_str){
          let video_paras = video_paras_str.split(",,,");
          if(video_paras[0]=="true"){
            // Is a TV show
            let video_item = {
              isTVshow: true,
              name: video_paras[1]?video_paras[1]:"",
              poster_path: video_paras[2]?video_paras[2]:"https://cinemaone.net/images/movie_placeholder.png",
              id: video_id,
            };
            this.continuelist.push(video_item);
          }else{
            // Is a Movie
            let video_item = {
              isTVshow: false,
              title: video_paras[1]?video_paras[1]:"",
              poster_path: video_paras[2]?video_paras[2]:"https://cinemaone.net/images/movie_placeholder.png",
              id: video_id,
            };
            this.continuelist.push(video_item);
          }
        }
      }
      this.continuelist.reverse();
    }
  }
}
