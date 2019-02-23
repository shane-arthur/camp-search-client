import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Actions, EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
import { CampSearchComponent } from './components/camp-search/camp-search.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { CampCardComponent} from './components/camp-card/camp-card.component';
// effects
import { SearchEffects } from './effects/search.effects';
import { ActivitiesEffects } from './effects/activities.effects';

// reducers
import * as searchReducer from './reducers/search.reducer';
import * as activityReducer from './reducers/activities.reducer';
import * as campReducer from './reducers/camps.reducer';

// services
import { NavService } from './services/navigation.service';

// module logic deps
import { Store } from '@ngrx/store';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule { }
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampSearchComponent,
    TopNavComponent, 
    MenuListItemComponent,
    CampCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forFeature('search', {
      search: searchReducer.reducer
    }),
    StoreModule.forFeature('activity', {
      activity: activityReducer.reducer
    }),
    StoreModule.forFeature('camps', {
      camps: campReducer.reducer
    }),
    EffectsModule.forRoot([SearchEffects, ActivitiesEffects]),
  ],
  providers: [Store, Actions, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
