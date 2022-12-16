import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFourComponent } from './tech-four.component';

describe('TechFourComponent', () => {
  let component: TechFourComponent;
  let fixture: ComponentFixture<TechFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
