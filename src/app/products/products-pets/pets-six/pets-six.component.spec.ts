import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsSixComponent } from './pets-six.component';

describe('PetsSixComponent', () => {
  let component: PetsSixComponent;
  let fixture: ComponentFixture<PetsSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
