import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFourComponent } from './pets-four.component';

describe('PetsFourComponent', () => {
  let component: PetsFourComponent;
  let fixture: ComponentFixture<PetsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
