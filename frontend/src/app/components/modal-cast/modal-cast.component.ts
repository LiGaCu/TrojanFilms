import { Component, OnInit , Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { GethomedataService } from '../../services/gethomedata.service';

@Component({
  selector: 'app-modal-cast',
  templateUrl: './modal-cast.component.html',
  styleUrls: ['./modal-cast.component.css']
})
export class ModalCastComponent implements OnInit {
  @Input() person_id: any = "";
  @Input() backup_img: any = "";

  public person_details:any = {};
  public person_externals:any = {};

  public facebook_icon: string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYhWOwjpoRZBU5/ZV15Iz/9MRWEdNf20bODGAYCMvhjoic/ophoCyH4VEHUNUBzglz/k9ffuL/nYdv/v/69ec/OqCpA/wyF/2//+QdhqV0cYBN1Iz/l26+wGs5TR1Q1beToOU0dcD+k3cH1gEv33zGsOzlm8//i9q3/neMm41XL1Uc8OfPXwwHFLVvJUovVRyADRDyOc0dQKzeoekAcsCb918H1gFHzj4YWAfMXXN6YB1Q2rV9YB3gl7loGOWCUQeMOmDUAaMOoKoDrCKmvx4wB0TMeMlgGzkzgNIeMlkOiJjx0jpimh8AnpIM8LFP2hYAAAAASUVORK5CYII=";
  public twitter_icon: string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVRYhe2WTUhUURSAj6EUrSKD0t69b8YJU9oIunIhQtQihCByGWSRqxCKIoh+lkFGbXNRc+99M04IIRQF1sJ+Nm0qNArdJrUI0nnn3Dej/XhbqGM6r5m50wxBeOAsHlzO9517zoMLsBH/TRhT48rgBFP0jCucZYoyXNB7JnGw1TMN64+zVLoDjNkEAADtQ6aOSX22XPbu+8bhQj9hEk1oKiSeyBxt9UxDROg+5tG46+HNXAE3mTnCJBpH6Wu28O642bLcaTg8J0GLTNHi0rf/sfkh7sgV4ULfWjloK8EkDhaFr0maiIpsl6PwJBdB/5KAh+L3Q67CR00js7wYvC0+t41L+mYjwBUtMInGlf7b9iGzdakLgTdC56b8gdyihASXQY9d9zmJly3S1K8WSmT3F1igae7hhX1xvWu9QEToPnsBmtjz2GzOn6VHk0WW6DsX+MAV+hyXQQ8T6RiTeNi6e6nHQq8zKrJdTOrAqqCiH7YCrkQvD+5IfZ4n/WNcBP1c0nw5cy1ZwMPr+QJecLWa0LUL6A/kb3OhJaxwRuK6LfyXUv7T6ndPn0PhAABNcr6ZS/pUVQEPxR8FAAAa72YYF/p1tQRiqUxnQYEWaerdewutjkenmaQvlRWg5wXhAADRYbOTKdRVuQGRPlhUAADASQRXKg+n0ZLgAABgTA2XdLticEUzzojZXrrAioSiXlfh1F/O/WckTt128HXBRDrGFL6y/uUULXBFveWTjalxk/4hruiD/bWjjg6nD1gz24dMXSyV6XRFcIkpnC5z5u9YKt1RMjQqsl1c6jEucW710WifXKHPhH8Gxk2tdecwbmqZ0se5oBfWcI8mXRlcDnsxlRU8mW7iCTzFFN5xlP+GKZphUgfLj8+vrsIpJmiUeXix0ZvfWxHoRvzL+AXFnK2J8UgF/AAAAABJRU5ErkJggg==";
  public instagram_icon: string="data:image/png;base64,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";
  public imdb_icon: string="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD80lEQVRoge2azU8bRxjG9//peq3Sqk0bB1eq1EoRVFWK0igfIorUS0+t2kOk5kjVW3vNNX8AqlNKlbWcFcZgOwHisBDUksZ8GIgQBsN+eXZnZp8e1l57SSCGGNaoHumRPO87M35+8+GZgwWhVpCR+jERVZCRdGQkdKh0TEQVZKN9QnNBRhrqAHNH1ZBnPhvt6wAzx1W/UNs2YRs5niaiioAJSQvdyLEBJE0I3cRbqgsQtroAYasLELa6AGGrCxC2/gcAkz3A7DVAHfSU/xh4erlRVweB3Dkg92Ew9vQKkPsoGJu9Bjy55I2RkYDs+4B6o5a7Dky+134AN98LMBP14qq34FrLaC7u/Ldw1W+CMfISfHYQry32JvD8jje2y7wYt+Hm4+0HYNkYuLPnfzeZuQlH+zfo55+fYS/8FIhRowQyc6MZCYyUG1VOwAtXwR3dqzoaWP4ToPAV8OTLNgPYu/sAngfMkuV7IC/u7gNYDQBwR8NqcgCM7PgxZ/4HsNrYLrPgGgv11sD6PSATPR0Ae3McZOPBGwFI7nNQs+THqnO3weyKv0KkXGisFzMbZ+WkAFxGvK1hrYEaS4DLwal5IAB9dBHUXPNj1txtf0WYvYuN1CW4zKq118Fz8ZMFoOY6qLnRmHXrJRxj9UAAJ38YQAX29GV/ArijgeV6TxbA3ltEdWu6kSsXYFcW3gLg61MG2JmHsTLs58zSqL+PjwUwddorsDMHfeE3P6cv3gUpzxwMkPsM1FwPAtQO8asA+ikAVJ5BL3zfAFDvwD4EgD37zjcIAJb6ow/A7V3YjwfAaeMQtw+gdtn4AHoRAODsLcJ8dMXPGVO3YO/MeQDm2r6L7NViTt0MAPFK4zwxUgab/KAdAOdBzXVwaoFTC9Xp6yDbKji1QLZVkMlPQaub4NSAlb0IsvUYnFqw9/4Gmb4KTk2/r8uq4NSAY5SwWfgF1tgFMLIFTi04+gpI/QfB5Sirv4KnD/fWGkA6iqU/LqCYiKOYiMNSelAaiaGYiKM0EgMdk7B0P4Ziohe2EsXan+dRTMSxOhKDpfSgmOj1+75IxFH8PYbi8LvY/kv0xr7v5ZcS57Ay/A6WHwxgabQP5VHxjeZbAkBGAh2L+HLHJbC095mlI4G8Bxxs29y3Ob5/7PpY1YcRECXSkvmWATpZXYCw1QUIW12AsHX2AZovlbMmd1yCUL8Bz6JYOgLBSrX25uhEWSkRgiaLmn2Et0enyFYi0JKiLuiyqGiyCCslgqWDD61OU/0haaVEaLIIXRYVwZSlfk32AmdNpiz1C4IgCLosDoVt5qjSZXEo8I8VMyl9ocuioiUjRtjmDlQyYuiyqPgzLwjCfzz/VktHxv2ZAAAAAElFTkSuQmCC";
  
  constructor(public activeModal: NgbActiveModal, private getdataService: GethomedataService) { }

  ngOnInit(): void {
    this.getdataService.getDetailsPerson(this.person_id).subscribe(res =>{
      this.person_details = res;
      this.person_details.profile_path = this.person_details.profile_path || this.backup_img;
      this.person_details.alias_str = "";
      for(let i=0;i<this.person_details.also_known_as.length;i++){
        this.person_details.alias_str += this.person_details.also_known_as[i];
        if(i!=this.person_details.also_known_as.length-1){
          this.person_details.alias_str += ", "
        }
      }
    });
    this.getdataService.getExternalsPerson(this.person_id).subscribe(res =>{
      this.person_externals = res;
      if(this.person_externals.imdb_id){
        this.person_externals.imdb_id = "https://" + this.person_externals.imdb_id;
      }
      if(this.person_externals.instagram_id){
        this.person_externals.instagram_id = "https://" + this.person_externals.instagram_id;
      }
      if(this.person_externals.facebook_id){
        this.person_externals.facebook_id = "https://" + this.person_externals.facebook_id;
      }
      if(this.person_externals.twitter_id){
        this.person_externals.twitter_id = "https://" + this.person_externals.twitter_id;
      }
    });
  }
}
