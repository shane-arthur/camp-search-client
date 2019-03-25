import { Component, OnInit } from '@angular/core';
import { SearchDetails } from './../../models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as reducer from './../../reducers';
import { ICampData } from 'src/app/models/camp.interface';

@Component({
  selector: 'app-camp-search-container',
  templateUrl: './camp-search.container.html',
  styleUrls: ['./camp-search.container.scss']
})
export class CampSearchContainerComponent implements OnInit {
  activities: ICampData[] = [];
  searchResults$: Observable<SearchDetails>;
  latitude = 51.678418;
  longitude = 7.809007;
  userSelectedLocation = false;
  loading = false;
  constructor(private store: Store<reducer.State>) { }

  ngOnInit() {
    this.searchResults$ = this.store.select(reducer.getSearch);
    this.searchResults$.subscribe(response => {
      if (!!response && !!response.data) {
        this.activities = response.data;
      }
    });
    this.store.select(reducer.searchLoading).subscribe((value) => this.loading = value);
  }

  choseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.userSelectedLocation = true;
  }
}
