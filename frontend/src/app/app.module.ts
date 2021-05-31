import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MylistpageComponent } from './components/mylistpage/mylistpage.component';
import { MoviepageComponent } from './components/moviepage/moviepage.component';
import { TvshowpageComponent } from './components/tvshowpage/tvshowpage.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { CarouselManyComponent } from './components/carousel-many/carousel-many.component';
import { ModalCastComponent } from './components/modal-cast/modal-cast.component';
import { FormsModule } from '@angular/forms';
//import { VideoModule } from './components/video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    MylistpageComponent,
    MoviepageComponent,
    TvshowpageComponent,
    CarouselMainComponent,
    CarouselManyComponent,
    ModalCastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    //,VideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
