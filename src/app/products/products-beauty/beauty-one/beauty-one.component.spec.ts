import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyOneComponent } from './beauty-one.component';

describe('BeautyOneComponent', () => {
  let component: BeautyOneComponent;
  let fixture: ComponentFixture<BeautyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
