import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThirdPartyModule } from './third.party.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { GenresDetailsComponent } from './genres-details/genres-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresDetailsComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
