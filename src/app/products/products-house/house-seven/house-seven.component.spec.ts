import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSevenComponent } from './house-seven.component';

describe('HouseSevenComponent', () => {
  let component: HouseSevenComponent;
  let fixture: ComponentFixture<HouseSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
