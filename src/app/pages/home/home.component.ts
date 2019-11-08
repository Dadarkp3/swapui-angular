import { Component, OnInit, Input, Output } from "@angular/core";
import { People } from "src/app/models/People";
import { ImageService } from "src/app/services/image/image.service";
import { SearchService } from "src/app/services/search/search.service";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "src/app/models/Pagination";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Output()
  public isLoading = false;
  public isError = false;
  public peoples = Array<People>();
  public previous = faArrowLeft;
  public next = faArrowRight;
  public pagination: Pagination;

  constructor(
    private searchService: SearchService,
    private imageService: ImageService
  ) {
    this.pagination = new Pagination();
  }

  ngOnInit() {
    this.inputReceived("https://swapi.co/api/people");
  }

  inputReceived(value: string) {
    this.isLoading = true;
    this.isError = false;
    this.peoples = [];

    try {
      this.searchService.search(value).subscribe(data => {
        this.buildPagination(data);
        this.peoples = data.results;
        console.log(data);
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
    } catch (error) {
      this.isLoading = false;
    }
  }

  searchStarship(people: People) {
    people.ship = [];
    people.starships.forEach(startship => {
      this.searchService.search(startship).subscribe((ship: any) => {
        people.ship.push(ship);
      });
    });
  }

  searchImage(people) {
    this.imageService.searchImage(people.name).subscribe((data: any) => {
      people.src = data.items[0].link;
    });
  }

  private buildPagination(data) {
    this.pagination = data;
    if (data.previous == null) {
      this.pagination.currentPage = 1;
    }
    console.log(this.pagination);
  }

  previousSearch() {
    console.log(this.pagination);
    this.inputReceived(this.pagination.previous);
  }

  nextSearch() {
    console.log(this.pagination);
    this.inputReceived(this.pagination.next);
  }
}
