import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ThirdPartyModule } from "./third.party.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { GenresDetailsComponent } from "./genres-details/genres-details.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { DataService } from "./_services/index";

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
    ThirdPartyModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
