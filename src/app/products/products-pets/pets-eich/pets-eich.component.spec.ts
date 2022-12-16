import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsEichComponent } from './pets-eich.component';

describe('PetsEichComponent', () => {
  let component: PetsEichComponent;
  let fixture: ComponentFixture<PetsEichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsEichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsEichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
