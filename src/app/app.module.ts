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
import { PeopleGridComponent } from "./components/people-grid/people-grid.component";
import { ImageService } from "./services/image/image.service";
import { SearchService } from "./services/search/search.service";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    LoaderComponent,
    PeopleCardComponent,
    PeopleGridComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService, ImageService],
  bootstrap: [AppComponent],
  exports: [FontAwesomeModule]
})
export class AppModule {}
