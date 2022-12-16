import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsTwoComponent } from './pets-two.component';

describe('PetsTwoComponent', () => {
  let component: PetsTwoComponent;
  let fixture: ComponentFixture<PetsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
