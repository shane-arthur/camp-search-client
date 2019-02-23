import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActivities from './../app/reducers/activities.reducer';
import { Observable } from 'rxjs';
import { NavService } from './services/navigation.service';
import { Activity } from './models/activities.interface';
import * as activityActions from './actions/activities.actions';
import * as reducer from './reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  activities$: Observable<Activity[]>;
  activities = [];
  showSubmenu: boolean = false;
  expanded = {};
  constructor(private store: Store<reducer.State>, public navService: NavService, private router: Router) { }
  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.store.dispatch(new activityActions.LoadActivities());
    this.activities$ = this.store.select(reducer.getActivities);
    this.activities$.subscribe(response => {
      this.activities = response;
    });
  }

  selectActivity(activity) {
    if (this.expanded[activity.id]) {
      const expanded = !this.expanded[activity.id];
      this.expanded = { ...this.expanded, [activity.id]: expanded }
    }
    else {
      if (this.expanded[activity.id] === undefined) {
        this.expanded[activity.id] = true;
        this.store.dispatch(new activityActions.LoadCampsPerActivity(activity.id))
      }
      else {
        this.expanded[activity.id] = true;
      }
    }
  }

  isExpanded(activity) {
    const expanded = this.expanded[activity.id] || false;
    return { expanded };
  }

  isShown(activity) {
    const expanded = this.expanded[activity.id] || false;
    return expanded ? { display: 'block' } : { display: 'none' };
  }

  isRotated(activity) {
    const rotated = this.expanded[activity.id] || false;
    return { rotated };
  }


  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  navigateToDetailsPage(activity){
    const url = `/camp/${activity.id}`;
    this.router.navigateByUrl(url);
  }


}