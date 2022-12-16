import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyThreeComponent } from './beauty-three.component';

describe('BeautyThreeComponent', () => {
  let component: BeautyThreeComponent;
  let fixture: ComponentFixture<BeautyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
