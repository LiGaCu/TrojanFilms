import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mylistpage',
  templateUrl: './mylistpage.component.html',
  styleUrls: ['./mylistpage.component.css']
})
export class MylistpageComponent implements OnInit {
  public watchlist:any = [];

  public isMobile: boolean=false;
  
  constructor(breakpointObserver: BreakpointObserver) { 
    breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }else{
        this.isMobile = false;
      }
    });
  }

  ngOnInit(): void {
    this.getWatchlist();
  }

  getWatchlist(){
    let watchlist_keys_str = localStorage.getItem("watchlist");
    if(watchlist_keys_str){
      let watchlist_keys = watchlist_keys_str.split(",");
      for(let video_key of watchlist_keys){
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
            this.watchlist.push(video_item);
          }else{
            // Is a Movie
            let video_item = {
              isTVshow: false,
              title: video_paras[1]?video_paras[1]:"",
              poster_path: video_paras[2]?video_paras[2]:"https://cinemaone.net/images/movie_placeholder.png",
              id: video_id,
            };
            this.watchlist.push(video_item);
          }
        }
      }
      this.watchlist.reverse();
    }
  }
}
