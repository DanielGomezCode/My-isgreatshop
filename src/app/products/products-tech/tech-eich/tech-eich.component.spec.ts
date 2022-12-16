import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEichComponent } from './tech-eich.component';

describe('TechEichComponent', () => {
  let component: TechEichComponent;
  let fixture: ComponentFixture<TechEichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechEichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechEichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
