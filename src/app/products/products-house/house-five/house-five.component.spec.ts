import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFiveComponent } from './house-five.component';

describe('HouseFiveComponent', () => {
  let component: HouseFiveComponent;
  let fixture: ComponentFixture<HouseFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
