import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitOneComponent } from './fit-one.component';

describe('FitOneComponent', () => {
  let component: FitOneComponent;
  let fixture: ComponentFixture<FitOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
