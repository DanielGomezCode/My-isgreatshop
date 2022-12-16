import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyTwoComponent } from './beauty-two.component';

describe('BeautyTwoComponent', () => {
  let component: BeautyTwoComponent;
  let fixture: ComponentFixture<BeautyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
