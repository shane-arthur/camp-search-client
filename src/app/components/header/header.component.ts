import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './../../reducers';
import * as searchActions from './../../actions/search.actions';
import { SearchRequest } from './../../models/search.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  formGroup: FormGroup;
  searchRequest: SearchRequest;
  constructor(private store: Store<State>, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.initForm();
  }

  private initForm() {
    return this.formBuilder.group({
      inputSearch: []
    });
  }

  public onClickSearch() {
    let value: string = this.formGroup.controls['inputSearch'].value;
    if (value) {
      value = value.trim();
      this.searchRequest = {} as SearchRequest;
      this.searchRequest.searchTerm = value;
      this.store.dispatch(new searchActions.LoadSearchResults(this.searchRequest));
      this.navigateToSearch();
    }
  }
  public onClickClear() {
    this.formGroup.controls['inputSearch'].setValue(null);
  }

  navigateToSearch() {
    const url = `/camp-search`;
    this.router.navigateByUrl(url);
  }

}
