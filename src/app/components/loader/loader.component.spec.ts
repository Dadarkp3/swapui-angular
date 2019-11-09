import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoaderComponent } from "./loader.component";

describe("LoaderComponent", () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show loader on screen", () => {
    component.isLoading = true;
    let loader = fixture.debugElement.query(By.css("span")).nativeElement;
    fixture.detectChanges();
    expect(loader.style.display).toBe("flex");
  });

  it("should not show loader on screen", () => {
    component.isLoading = false;
    let loader = fixture.debugElement.query(By.css("span")).nativeElement;
    fixture.detectChanges();
    expect(loader.style.display).toBe("none");
  });
});
