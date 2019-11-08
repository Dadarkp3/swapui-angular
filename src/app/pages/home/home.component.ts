import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { People } from "src/app/models/People";
import { ImageService } from "src/app/services/image/image.service";
import { SearchService } from "src/app/services/search/search.service";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "src/app/models/Pagination";
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";
import { Url } from "url";
import { PaginationButton } from "src/app/models/PaginationButton";
import { HttpErrorResponse } from "@angular/common/http";

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
  public inputValue = "https://swapi.co/api/people?page=";
  public currentPage = 0;

  constructor(
    private searchService: SearchService,
    private imageService: ImageService,
    private myElement: ElementRef
  ) {
    this.pagination = new Pagination();
  }

  ngOnInit() {
    this.inputReceived("");
  }

  inputReceived(value: string) {
    this.inputValue = `https://swapi.co/api/people/?search=${value}&page=`;
    this.search(this.inputValue + 1);
  }

  search(url: string) {
    this.isLoading = true;
    this.isError = false;
    this.peoples = [];

    this.searchService.search(url).subscribe(
      data => {
        this.buildPagination(data);
        this.peoples = data.results;
        this.isLoading = false;
        this.peoples.forEach(people => {
          Promise.all([
            // this.searchImage(people),
            this.searchStarship(people)
          ]);
        });
        this.isLoading = false;
        this.goTotop();
      },
      (err: HttpErrorResponse) => {
        console.warn(err);
        this.isLoading = false;
        this.isError = true;
      }
    );
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
    this.imageService.searchImage(people.name).subscribe(
      (data: any) => {
        people.src = data.items[0].link;
      },
      (err: HttpErrorResponse) => {
        console.warn(err);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  private buildPagination(data) {
    this.pagination = data;
    this.pagination.buttonsPagination = [];
    if (data.previous == null) {
      this.currentPage = 0;
    }
    this.pagination.totalPages =
      (data.count / 10) % 1 == 0
        ? data.count / 10
        : (data.count / 10) | (1.0 - 0);
    for (let index = 0; index < this.pagination.totalPages; index++) {
      console.log(this.currentPage, index);
      this.pagination.buttonsPagination[index] = new PaginationButton();
      if (this.currentPage == index) {
        this.pagination.buttonsPagination[index].isCurrent =
          this.currentPage == index;
        this.pagination.buttonsPagination[index].style = "active";
      }
    }
    console.log(this.pagination.buttonsPagination);
  }

  previousSearch() {
    if (this.pagination.previous) {
      this.currentPage--;
      this.search(this.pagination.previous);
    }
  }

  nextSearch() {
    if (this.pagination.next) {
      this.currentPage++;
      this.search(this.pagination.next);
    }
  }

  goTotop() {
    this.myElement.nativeElement.ownerDocument
      .getElementById("people-grid")
      .scrollIntoView({ behavior: "smooth" });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  searchByPage(page: number) {
    console.log(page);
    console.log(this.currentPage);
    this.currentPage = page;
    console.log(this.currentPage);
    this.search(this.inputValue + (page + 1));
  }

  isDisabled(value) {
    return value === null;
  }
}
