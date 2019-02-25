import { Component, OnInit } from '@angular/core';
import { SearchDetails } from './../../models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as reducer from './../../reducers';
import { ICampData } from 'src/app/models/camp.interface';

@Component({
  selector: 'app-camp-search-container',
  templateUrl: './camp-search.container.html'
})
export class CampSearchContainerComponent implements OnInit {
  activities: ICampData[] = [];
  searchResults$: Observable<SearchDetails>;
  constructor(private store: Store<reducer.State>) { }

  ngOnInit() {
    this.searchResults$ = this.store.select(reducer.getSearch);
    this.searchResults$.subscribe(response => {
      if (!!response && !!response.data) {
        this.activities = response.data;
      }
    });
  }
}
