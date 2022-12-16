import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSevenComponent } from './fit-seven.component';

describe('FitSevenComponent', () => {
  let component: FitSevenComponent;
  let fixture: ComponentFixture<FitSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
