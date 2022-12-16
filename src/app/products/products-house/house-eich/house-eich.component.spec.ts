import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseEichComponent } from './house-eich.component';

describe('HouseEichComponent', () => {
  let component: HouseEichComponent;
  let fixture: ComponentFixture<HouseEichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseEichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseEichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
