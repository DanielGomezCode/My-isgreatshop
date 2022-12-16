import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTwoComponent } from './tech-two.component';

describe('TechTwoComponent', () => {
  let component: TechTwoComponent;
  let fixture: ComponentFixture<TechTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
