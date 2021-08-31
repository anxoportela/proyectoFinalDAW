import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesItemComponent } from './detalles-item.component';

describe('DetallesItemComponent', () => {
  let component: DetallesItemComponent;
  let fixture: ComponentFixture<DetallesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
