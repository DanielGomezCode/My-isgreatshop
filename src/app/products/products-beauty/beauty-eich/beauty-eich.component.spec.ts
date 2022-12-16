import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyEichComponent } from './beauty-eich.component';

describe('BeautyEichComponent', () => {
  let component: BeautyEichComponent;
  let fixture: ComponentFixture<BeautyEichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyEichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyEichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
