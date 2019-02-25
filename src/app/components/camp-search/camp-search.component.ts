import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SearchDetails } from './../../models/search.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as reducer from './../../reducers';
import { ICampData } from 'src/app/models/camp.interface';

@Component({
  selector: 'app-camp-search',
  templateUrl: './camp-search.component.html',
  styleUrls: ['./camp-search.component.scss']
})
export class CampSearchComponent implements OnInit, AfterViewInit {
  private paginator: MatPaginator;
  private sort: MatSort;
  @Input() activities = [];
  searchResults$: Observable<SearchDetails>;
  // sortedData: any;

  constructor(private store: Store<reducer.State>, private router: Router) { }
  displayedColumns: string[] = ['campname', 'date', 'city'];
  dataSource: any;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    if (!!this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {
    this.searchResults$ = this.store.select(reducer.getSearch);
    this.searchResults$.subscribe(response => {
      if (!!response && !!response.data) {
        this.activities = response.data;
        // this.sortedData = this.activities.slice();
        this.dataSource = new MatTableDataSource(this.activities);
      }
    });
  }

  ngAfterViewInit() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  goToCampDetails(camp: ICampData) {
    if (!!camp._source && camp._source.active === 'Y') {
      const url = `/camp/${camp._source.idcampdetails}`;
      this.router.navigateByUrl(url);
    }
  }

  // sortData(sort: Sort) {
  //   const data = this.activities.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'campname': return this.compare(a.campname, b.campname, isAsc);
  //       case 'date': return this.compare(+a.date, +b.date, isAsc);
  //       case 'city': return this.compare(+a.city, +b.city, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }

  // compare(a, b, isAsc) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // }
}
