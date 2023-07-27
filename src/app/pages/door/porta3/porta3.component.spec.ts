import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porta3Component } from './porta3.component';

describe('Porta3Component', () => {
  let component: Porta3Component;
  let fixture: ComponentFixture<Porta3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Porta3Component]
    });
    fixture = TestBed.createComponent(Porta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
