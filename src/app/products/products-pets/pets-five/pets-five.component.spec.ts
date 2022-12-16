import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFiveComponent } from './pets-five.component';

describe('PetsFiveComponent', () => {
  let component: PetsFiveComponent;
  let fixture: ComponentFixture<PetsFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
