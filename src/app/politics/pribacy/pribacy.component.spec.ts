import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PribacyComponent } from './pribacy.component';

describe('PribacyComponent', () => {
  let component: PribacyComponent;
  let fixture: ComponentFixture<PribacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PribacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PribacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
