import { Component, OnInit, Input } from "@angular/core";
import { People } from "src/app/models/People";

@Component({
  selector: "app-people-card",
  templateUrl: "./people-card.component.html",
  styleUrls: ["./people-card.component.scss"]
})
export class PeopleCardComponent implements OnInit {
  @Input()
  public people: People;

  constructor() {}

  ngOnInit() {}
}
