import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Subject } from "rxjs/internal/Subject";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  public icon = faSearch;
  public peopleInput: string = "";
  public debounce$ = new Subject<string>();
  @Output()
  public inputEmitter: EventEmitter<string> = new EventEmitter();
  query: string = "";

  constructor() {
    this.debounce$
      .pipe(debounceTime(300))
      .pipe(distinctUntilChanged())
      .subscribe(() => this.sendQuery());
  }

  ngOnInit() {}

  sendQuery() {
    const URL = `https://swapi.co/api/people/?search=${this.query}`;
    this.inputEmitter.emit(URL);
  }
}
