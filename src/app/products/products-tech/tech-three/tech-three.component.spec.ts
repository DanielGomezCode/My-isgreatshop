import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechThreeComponent } from './tech-three.component';

describe('TechThreeComponent', () => {
  let component: TechThreeComponent;
  let fixture: ComponentFixture<TechThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
