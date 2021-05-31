import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistpageComponent } from './components/mylistpage/mylistpage.component';
import { MoviepageComponent } from './components/moviepage/moviepage.component';
import { TvshowpageComponent } from './components/tvshowpage/tvshowpage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, runGuardsAndResolvers: 'always'},
  {path:'mylist', component:MylistpageComponent, runGuardsAndResolvers: 'always'},
  { path:'watch/movie/:movie_id', component:MoviepageComponent, runGuardsAndResolvers: 'always'},
  { path:'watch/tv/:tvshow_id', component:TvshowpageComponent, runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
