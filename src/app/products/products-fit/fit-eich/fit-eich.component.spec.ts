import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitEichComponent } from './fit-eich.component';

describe('FitEichComponent', () => {
  let component: FitEichComponent;
  let fixture: ComponentFixture<FitEichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitEichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitEichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
