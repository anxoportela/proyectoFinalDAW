import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorValoradosComponent } from './mejor-valorados.component';

describe('MejorValoradosComponent', () => {
  let component: MejorValoradosComponent;
  let fixture: ComponentFixture<MejorValoradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorValoradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorValoradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
