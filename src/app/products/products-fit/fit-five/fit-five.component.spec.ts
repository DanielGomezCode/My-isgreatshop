import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFiveComponent } from './fit-five.component';

describe('FitFiveComponent', () => {
  let component: FitFiveComponent;
  let fixture: ComponentFixture<FitFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
