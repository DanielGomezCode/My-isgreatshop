import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechOneComponent } from './tech-one.component';

describe('TechOneComponent', () => {
  let component: TechOneComponent;
  let fixture: ComponentFixture<TechOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
