import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautySixComponent } from './beauty-six.component';

describe('BeautySixComponent', () => {
  let component: BeautySixComponent;
  let fixture: ComponentFixture<BeautySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautySixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
