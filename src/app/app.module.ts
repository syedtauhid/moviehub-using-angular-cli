import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ThirdPartyModule } from "./third.party.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { GenresDetailsComponent } from "./genres-details/genres-details.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { DataService } from "./_services/index";
import { KeysPipe } from "./_pipes/arraykey.pipe";
import { SafePipe } from "./_pipes/safe.pipe";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresDetailsComponent,
    MovieDetailsComponent,
    KeysPipe,
    SafePipe

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ThirdPartyModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
