import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "src/app/components/header/header.component";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HomeComponent]
})
export class HomeModule {}
