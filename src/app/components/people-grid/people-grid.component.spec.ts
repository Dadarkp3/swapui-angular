import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeopleGridComponent } from "./people-grid.component";
import { LoaderComponent } from "../loader/loader.component";
import { PeopleCardComponent } from "../people-card/people-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { People } from "src/app/models/People";
import { By } from "@angular/platform-browser";

const peoples: People[] = [];
const people: People = new People();

describe("PeopleGridComponent", () => {
  let component: PeopleGridComponent;
  let fixture: ComponentFixture<PeopleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleGridComponent, LoaderComponent, PeopleCardComponent],
      imports: [FontAwesomeModule],
      schemas: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleGridComponent);
    component = fixture.componentInstance;
    component.peoples = peoples;
    component.isLoading = false;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show empty people messsage", () => {
    component.peoples = [];
    fixture.detectChanges();
    let error = fixture.debugElement.query(By.css("#error")).nativeElement;
    expect(error.innerText).toBe(
      "You just looked for someone that isn't born yet!"
    );
  });

  it("it should retourn true for empty people", () => {
    component.peoples = [];
    fixture.detectChanges();
    expect(component.isEmpty()).toBeTruthy();
  });

  it("it should retourn false for empty people", () => {
    people.src =
      "https://www.sideshow.com/storage/product-images/903109/luke-skywalker_star-wars_feature.jpg";
    peoples.push(people);
    fixture.detectChanges();
    expect(component.isEmpty()).toBeFalsy();
  });

  it("should show cards", () => {
    people.src =
      "https://www.sideshow.com/storage/product-images/903109/luke-skywalker_star-wars_feature.jpg";
    peoples.push(people);
    fixture.detectChanges();

    let component = fixture.debugElement.query(By.css("app-people-card"))
      .nativeElement;
    expect(component).toBeTruthy();
  });
});
