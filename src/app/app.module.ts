import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";
import { PeopleCardComponent } from "./components/people-card/people-card.component";
import { StarshipCardComponent } from "./components/starship-card/starship-card.component";
import { StarshipGridComponent } from "./components/starship-grid/starship-grid.component";
import { PeopleGridComponent } from "./components/people-grid/people-grid.component";
import { ImageService } from "./services/image/image.service";
import { SearchService } from "./services/search/search.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    LoaderComponent,
    PeopleCardComponent,
    StarshipCardComponent,
    StarshipGridComponent,
    PeopleGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
