import { Component, OnInit, Input } from "@angular/core";
import { People } from "src/app/models/People";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-people-card",
  templateUrl: "./people-card.component.html",
  styleUrls: ["./people-card.component.scss"]
})
export class PeopleCardComponent implements OnInit {
  public noImage = "../../../assets/img/navbar.jpg";
  public icon = faRocket;

  @Input()
  public people: People;

  constructor() {}

  ngOnInit() {}

  isImageFound(people) {
    return people == undefined ||
      people.src == "undefined" ||
      people.src == undefined
      ? "../../../assets/img/no-image.jpg"
      : people.src;
  }
}
