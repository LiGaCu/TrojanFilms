import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  template: '<youtube-player videoId={{video_id}} [height] = "video_height" [width]="video_width"></youtube-player>',
  selector: 'app-video',
})
export class VideoComponent implements OnInit {
  @Input() video_id: string = "tzkWB85ULJY";
  @Input() video_height: number = 495;
  @Input() video_width: number = 880;

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}