import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSixComponent } from './tech-six.component';

describe('TechSixComponent', () => {
  let component: TechSixComponent;
  let fixture: ComponentFixture<TechSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
