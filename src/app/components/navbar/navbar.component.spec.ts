import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";

describe("NavbarComponent", () => {
  let mockRouter = {
    navigate: jasmine.createSpy("navigate")
  };
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a logo", () => {
    let img = fixture.debugElement.query(By.css("img")).nativeElement;
    expect(img).toBeTruthy();
  });
});
