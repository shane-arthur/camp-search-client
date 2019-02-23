import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavService} from './../../services/navigation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() activity;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
                if (this.depth === undefined) {
                  this.depth = 0;
                }
  }

  ngOnInit() {
    this.expanded = true;
    this.navService.currentUrl.subscribe((url: string) => {
      this.ariaExpanded = this.expanded;
      if (this.activity.activityId && url) {
        this.expanded = url.indexOf(`/${this.activity.activityId}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(activity: any) {
    if (!activity.camps || !activity.camps.length) {
      this.router.navigateByUrl(activity.campId);
      this.navService.closeNav();
    }
    if (activity.camps && activity.camps.length) {
      this.expanded = !this.expanded;
    }
  }
}
