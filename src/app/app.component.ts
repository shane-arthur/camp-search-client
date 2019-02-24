import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from './models/activities.interface';
import * as activityActions from './actions/activities.actions';
import * as reducer from './reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activities$: Observable<Activity[]>;
  showSubmenu = false;
  expanded = {};
  constructor(private store: Store<reducer.State>, private router: Router) { }
  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.store.dispatch(new activityActions.LoadActivities());
    this.activities$ = this.store.select(reducer.getActivities);
  }

  selectActivity(activity) {
    if (this.expanded[activity.id]) {
      const expanded = !this.expanded[activity.id];
      this.expanded = { ...this.expanded, [activity.id]: expanded };
    } else {
      if (this.expanded[activity.id] === undefined) {
        this.expanded[activity.id] = true;
        this.store.dispatch(new activityActions.LoadCampsPerActivity(activity.id));
      } else {
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

  navigateToDetailsPage(id) {
    const url = `/camp/${id}`;
    this.router.navigateByUrl(url);
  }
}
