import { Component, OnInit, Input, Output } from "@angular/core";
import { People } from "src/app/models/People";
import { ImageService } from "src/app/services/image/image.service";
import { SearchService } from "src/app/services/search/search.service";
import { Starship } from "src/app/models/Starship";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Output()
  public isLoading = false;
  public peoples = Array<People>();
  constructor(
    private searchService: SearchService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.inputReceived("https://swapi.co/api/people");
  }

  inputReceived(value: string) {
    this.isLoading = true;
    this.searchService.search(value).subscribe(data => {
      this.peoples = data.results;
      this.isLoading = false;
      this.peoples.forEach(people => {
        Promise.all([
          // this.searchImage(people),
          this.searchStarship(people)
        ]);
      });
      this.isLoading = false;
      console.log(this.peoples);
    });
  }
  searchStarship(people: People) {
    const ships = [];
    people.starships.forEach(startship => {
      this.searchService.search(startship).subscribe((ship: any) => {
        ships.push(ship);
      });
    });
    people.ship = ships;
  }

  searchImage(people) {
    this.imageService.searchImage(people.name).subscribe((data: any) => {
      people.src = data.items[0].link;
    });
  }
}
