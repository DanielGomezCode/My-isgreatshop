import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsSevenComponent } from './pets-seven.component';

describe('PetsSevenComponent', () => {
  let component: PetsSevenComponent;
  let fixture: ComponentFixture<PetsSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
