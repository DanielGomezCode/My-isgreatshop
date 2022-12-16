import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyFiveComponent } from './beauty-five.component';

describe('BeautyFiveComponent', () => {
  let component: BeautyFiveComponent;
  let fixture: ComponentFixture<BeautyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
