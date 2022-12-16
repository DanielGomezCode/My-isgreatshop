import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFourComponent } from './house-four.component';

describe('HouseFourComponent', () => {
  let component: HouseFourComponent;
  let fixture: ComponentFixture<HouseFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
