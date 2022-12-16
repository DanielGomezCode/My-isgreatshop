import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyFourComponent } from './beauty-four.component';

describe('BeautyFourComponent', () => {
  let component: BeautyFourComponent;
  let fixture: ComponentFixture<BeautyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
