import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {routing} from './app.routing';
import {AppMaterialModule} from './app-material.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    MainDashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
