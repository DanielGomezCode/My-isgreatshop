import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFourComponent } from './fit-four.component';

describe('FitFourComponent', () => {
  let component: FitFourComponent;
  let fixture: ComponentFixture<FitFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
