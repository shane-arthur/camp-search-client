import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as campActions from '../../actions/camp.actions';
import { Observable } from 'rxjs';
import * as reducers from '../../reducers';


@Component({
  selector: 'app-camp-card',
  templateUrl: './camp-card.component.html',
  styleUrls: ['./camp-card.component.scss']
})
export class CampCardComponent implements OnInit  {
  showWebsite = false;
  campDetails$: Observable<any>;
  id;
  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit(){
    this.route.params.pipe(
      pluck('id'),
      tap(id => this.store.dispatch(new campActions.LoadCampDetails(id))),
      tap(id => this.campDetails$ = this.store.select(reducers.selectProductUnlocalizedById(id)))
    ).subscribe();

    this.campDetails$ = this.store.select(reducers.selectProductUnlocalizedById(this.id));
    this.campDetails$.subscribe(console.log);

  }


  mouseenter(){
    this.showWebsite = true;
  }

  mouseleave(){
    this.showWebsite = false;
  }

}
