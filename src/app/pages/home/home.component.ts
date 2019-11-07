import { Component, OnInit, Input, Output } from "@angular/core";
import { People } from "src/app/models/People";
import { ImageService } from "src/app/services/image/image.service";
import { SearchService } from "src/app/services/search/search.service";
import { forkJoin } from "rxjs";

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
        // let image = this.imageService.searchImage(people.name);
        // let specie = this.searchService.search(
        //   people.specie.size !== 0 && people.specie[0]
        // );
        // forkJoin([image, specie]).subscribe((results: any) => {
        //   console.log(results[0]);
        //   people.src = results[0].items[0].link;
        //   people.specie = results[1];
        // });
        this.imageService.searchImage(people.name).subscribe((data: any) => {
          people.src = data.items[0].link;
        });
      });
      this.isLoading = false;
      console.log(this.peoples);
    });
  }
}
