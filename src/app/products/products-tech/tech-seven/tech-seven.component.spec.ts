import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSevenComponent } from './tech-seven.component';

describe('TechSevenComponent', () => {
  let component: TechSevenComponent;
  let fixture: ComponentFixture<TechSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
