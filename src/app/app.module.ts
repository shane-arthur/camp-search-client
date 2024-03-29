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
import { ScrollingModule } from '@angular/cdk/scrolling';
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
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSpinner
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Google maps
import { AgmCoreModule } from '@agm/core';
// components
import { HeaderComponent } from './components/header/header.component';
import { CampSearchComponent } from './components/camp-search/camp-search.component';
import { CampCardComponent} from './components/camp-card/camp-card.component';
import { LandingPageComponent } from './pages/landing.page';

// containers
import { CampSearchContainerComponent } from './containers/camp-search/camp-search.container';

// effects
import { SearchEffects } from './effects/search.effects';
import { ActivitiesEffects } from './effects/activities.effects';

// reducers
import * as searchReducer from './reducers/search.reducer';
import * as activityReducer from './reducers/activities.reducer';
import * as campReducer from './reducers/camps.reducer';

// services
import { HttpHelperService } from './services/http-helper.service';

// services

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
    ScrollingModule,
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
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampSearchComponent,
    CampCardComponent,
    CampSearchContainerComponent,
    LandingPageComponent
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
    StoreModule.forFeature('camp', {
      camps: campReducer.reducer
    }),
    EffectsModule.forRoot([SearchEffects, ActivitiesEffects]),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [Store, Actions, HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
