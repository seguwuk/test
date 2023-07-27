import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocksComponent } from './locks.component';

describe('LocksComponent', () => {
  let component: LocksComponent;
  let fixture: ComponentFixture<LocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocksComponent]
    });
    fixture = TestBed.createComponent(LocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
