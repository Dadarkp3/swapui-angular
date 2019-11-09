import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeopleCardComponent } from "./people-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { People } from "src/app/models/People";
import { By } from "@angular/platform-browser";
import { Starship } from "src/app/models/Starship";

describe("PeopleCardComponent", () => {
  let component: PeopleCardComponent;
  let fixture: ComponentFixture<PeopleCardComponent>;
  let starship: Starship;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleCardComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCardComponent);
    component = fixture.componentInstance;
    component.people = new People();
    component.people.src = undefined;

    fixture.detectChanges();
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should show starship error message", () => {
    let error = fixture.debugElement.query(By.css("#error")).nativeElement;
    expect(error.innerText).toBe("No Starships found");
  });

  it("should show starships", () => {
    starship = new Starship();
    const starships: Starship[] = [];
    starship.name = "name test";
    starship.model = "model teste";
    starships.push(starship);
    component.people.ship = starships;
    fixture.detectChanges();
    let technical = fixture.debugElement.query(By.css(".technical"))
      .nativeElement;
    expect(technical).toBeTruthy();
  });

  it("should show default image", () => {
    let img = fixture.debugElement.query(By.css("img")).nativeElement;
    expect(img.src.search("img/no-image.jpg") !== -1).toBeTruthy();
  });

  it("should show image from google custom search", () => {
    component.people.src =
      "https://www.sideshow.com/storage/product-images/903109/luke-skywalker_star-wars_feature.jpg";
    fixture.detectChanges();
    let img = fixture.debugElement.query(By.css("img")).nativeElement;
    expect(img.src.search("img/no-image.jpg") === -1).toBeTruthy();
  });

  it("isImageFound should retourn default image", () => {
    expect(
      component.isImageFound(component.people).search("img/no-image.jpg") !== -1
    ).toBeTruthy();
  });

  it("isImageFound should not retourn default image", () => {
    component.people.src =
      "https://www.sideshow.com/storage/product-images/903109/luke-skywalker_star-wars_feature.jpg";
    fixture.detectChanges();
    expect(
      component.isImageFound(component.people).search("img/no-image.jpg") === -1
    ).toBeTruthy();
  });
});
