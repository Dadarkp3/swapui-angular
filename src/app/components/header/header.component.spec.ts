import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("shoud have name page title", () => {
    let cr = fixture.debugElement.query(By.css(".typewriter-text"))
      .nativeElement;
    expect(cr.innerText).toContain("Human Scam Tracker");
  });

  it("shoud have a page subtittle", () => {
    let nm = fixture.debugElement.query(By.css(".subtitle")).nativeElement;
    expect(nm.innerText).toContain(
      "Find everything about everyone in the galaxy"
    );
  });
});
