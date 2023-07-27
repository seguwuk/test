import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porta1Component } from './porta1.component';

describe('Porta1Component', () => {
  let component: Porta1Component;
  let fixture: ComponentFixture<Porta1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Porta1Component]
    });
    fixture = TestBed.createComponent(Porta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
