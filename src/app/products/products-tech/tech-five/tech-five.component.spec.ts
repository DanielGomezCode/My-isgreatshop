import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFiveComponent } from './tech-five.component';

describe('TechFiveComponent', () => {
  let component: TechFiveComponent;
  let fixture: ComponentFixture<TechFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
