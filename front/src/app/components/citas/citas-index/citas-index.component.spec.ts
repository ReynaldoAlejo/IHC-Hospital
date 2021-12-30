import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasIndexComponent } from './citas-index.component';

describe('CitasIndexComponent', () => {
  let component: CitasIndexComponent;
  let fixture: ComponentFixture<CitasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
