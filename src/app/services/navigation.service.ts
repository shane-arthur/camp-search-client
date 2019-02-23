import {EventEmitter, Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);
  isOpen = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public toggle() {
    if (this.isOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  public closeNav() {
    this.isOpen = false;
    this.appDrawer.close();
  }

  public openNav() {
    this.isOpen = true;
    this.appDrawer.open();
  }
}
