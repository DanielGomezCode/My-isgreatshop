import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautySevenComponent } from './beauty-seven.component';

describe('BeautySevenComponent', () => {
  let component: BeautySevenComponent;
  let fixture: ComponentFixture<BeautySevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautySevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
