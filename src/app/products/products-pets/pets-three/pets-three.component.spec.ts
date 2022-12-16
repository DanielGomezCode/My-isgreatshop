import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsThreeComponent } from './pets-three.component';

describe('PetsThreeComponent', () => {
  let component: PetsThreeComponent;
  let fixture: ComponentFixture<PetsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
