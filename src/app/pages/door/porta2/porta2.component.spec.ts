import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porta2Component } from './porta2.component';

describe('Porta2Component', () => {
  let component: Porta2Component;
  let fixture: ComponentFixture<Porta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Porta2Component]
    });
    fixture = TestBed.createComponent(Porta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
