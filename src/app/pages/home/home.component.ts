import { Component, OnInit, Input, Output } from "@angular/core";
import { PeopleService } from "src/app/services/people/people.service";
import { People } from "src/app/models/People";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Output()
  public isLoading = false;
  public peoples = Array<People>();
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {}

  inputReceived(value: string) {
    this.isLoading = true;
    this.peopleService
      .searchpPeople("https://swapi.co/api/people")
      .subscribe(data => {
        this.peoples = data.results;
        console.log(this.peoples);
        this.isLoading = false;
      });
  }
}
