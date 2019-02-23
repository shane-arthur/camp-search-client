import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { CampSearchComponent } from './components/camp-search/camp-search.component';
import { CampCardComponent } from './components/camp-card/camp-card.component';

const appRoutes: Routes = [
  {
    path: 'camp-search',
    component: CampSearchComponent
  },
  {
    path: 'camp/:id',
    component: CampCardComponent
  },
  { path: '', redirectTo: '/camp-search', pathMatch: 'full' },
  { path: '*', redirectTo: '/camp-search', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    StoreRouterConnectingModule.forRoot({
      // Connects RouterModule with StoreModule
      stateKey: 'router', // name of reducer key
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
