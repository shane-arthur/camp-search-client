import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, Sort } from '@angular/material';
import { ICampData, Source } from 'src/app/models/camp.interface';

@Component({
  selector: 'app-camp-search',
  templateUrl: './camp-search.component.html',
  styleUrls: ['./camp-search.component.scss']
})
export class CampSearchComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() activities;
  camps: Source[] = [];
  public dataSource = new MatTableDataSource<Source>();
  displayedColumns: string[] = ['campname', 'date', 'city'];
  sortedData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.extractSourceData(this.activities);
    this.dataSource.data = this.camps;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  goToCampDetails(source: Source) {
    if (!!source && source.active === 'Y') {
      const url = `/camp/${source.idcampdetails}`;
      this.router.navigateByUrl(url);
    }
  }

  extractSourceData(activities: ICampData[]) {
    activities.forEach(campData => {
      if (!!campData && campData._source) {
        this.camps.push(campData._source);
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  sortData(sort: Sort) {
    const data = this.camps.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'campname': return this.compare(a.campname, b.campname, isAsc);
        case 'city': return this.compare(+a.city, +b.city, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
