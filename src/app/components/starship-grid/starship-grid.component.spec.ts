import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipGridComponent } from './starship-grid.component';

describe('StarshipGridComponent', () => {
  let component: StarshipGridComponent;
  let fixture: ComponentFixture<StarshipGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
