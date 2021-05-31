import { Component, OnInit } from '@angular/core';
import { GethomedataService } from '../../services/gethomedata.service';

import {Observable, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, tap, switchMap} from 'rxjs/operators';

import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isCollapsed = true;

  public model: any;
  searching = false;
  searchFailed = false;

  constructor(private getdataService: GethomedataService,private router: Router) { }

  ngOnInit(): void {
  }
  
  search: OperatorFunction<string, readonly any[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.getdataService.getMultiSearch(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return new Array<any>();
          }))
      ),
      tap(() => this.searching = false)
    )

  formatter = (x: {name: string}) => x.name;
  modelChanges(){
    if(this.model){
      if(this.model.media_type=="tv"){
        this.router.navigateByUrl("/watch/tv/"+this.model.id);
        this.router.navigateByUrl("/watch/tv/"+this.model.id);
      }else if(this.model.media_type=="movie"){
        this.router.navigateByUrl("/watch/movie/"+this.model.id);
        this.router.navigateByUrl("/watch/movie/"+this.model.id);
      }
    }
  }
}

