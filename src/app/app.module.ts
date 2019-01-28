import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTE} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
