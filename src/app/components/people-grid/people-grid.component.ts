import { Component, OnInit, Input } from "@angular/core";
import { People } from "src/app/models/People";

@Component({
  selector: "app-people-grid",
  templateUrl: "./people-grid.component.html",
  styleUrls: ["./people-grid.component.scss"]
})
export class PeopleGridComponent implements OnInit {
  @Input()
  public peoples: Array<People>;

  @Input()
  public isLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
