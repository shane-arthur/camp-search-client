import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SearchDetails } from './../../models/search.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as reducer from './../../reducers';

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
  dataSubject = new BehaviorSubject<Element[]>([]);

  constructor(private store: Store<reducer.State>, private router: Router) { }
  displayedColumns: string[] = ['id', 'campname', 'date', 'city'];
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
        this.dataSource = new MatTableDataSource(this.activities);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngAfterViewInit() {
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }

  selectRow(row) {
    console.log('row' , row);
    if (!!row._source && row._source.active === 'Y') {
      const url = `/camp/${row._source.idcampdetails}`;
      this.router.navigateByUrl(url);
    } else {
      alert ('This camp is inactive');
    }
  }
}
