import { Component, OnInit } from "@angular/core";
import { faRocket, faInfo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-starship-card",
  templateUrl: "./starship-card.component.html",
  styleUrls: ["./starship-card.component.scss"]
})
export class StarshipCardComponent implements OnInit {
  public faRocket = faRocket;
  public faInfo = faInfo;

  constructor() {}

  ngOnInit() {}
}
