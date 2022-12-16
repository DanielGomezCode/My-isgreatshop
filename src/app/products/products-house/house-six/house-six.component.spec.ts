import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSixComponent } from './house-six.component';

describe('HouseSixComponent', () => {
  let component: HouseSixComponent;
  let fixture: ComponentFixture<HouseSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
