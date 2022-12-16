import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSixComponent } from './fit-six.component';

describe('FitSixComponent', () => {
  let component: FitSixComponent;
  let fixture: ComponentFixture<FitSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
