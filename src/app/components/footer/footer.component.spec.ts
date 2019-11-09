import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("shoud have a copyright", () => {
    let cr = fixture.debugElement.query(By.css("#footer-rights")).nativeElement;
    expect(cr.innerText).toContain("© 2019 November. All rights reserved.");
  });
  it("shoud have a name", () => {
    let cr = fixture.debugElement.query(By.css("#footer-name")).nativeElement;
    expect(cr.innerText).toContain("Made with ♥ remotely by Daiane Silva");
  });
});
