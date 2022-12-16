import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTwoComponent } from './fit-two.component';

describe('FitTwoComponent', () => {
  let component: FitTwoComponent;
  let fixture: ComponentFixture<FitTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
