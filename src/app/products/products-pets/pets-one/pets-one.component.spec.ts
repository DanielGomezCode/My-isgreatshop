import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsOneComponent } from './pets-one.component';

describe('PetsOneComponent', () => {
  let component: PetsOneComponent;
  let fixture: ComponentFixture<PetsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
