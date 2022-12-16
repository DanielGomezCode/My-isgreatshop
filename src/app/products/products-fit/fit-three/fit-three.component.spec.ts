import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitThreeComponent } from './fit-three.component';

describe('FitThreeComponent', () => {
  let component: FitThreeComponent;
  let fixture: ComponentFixture<FitThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
