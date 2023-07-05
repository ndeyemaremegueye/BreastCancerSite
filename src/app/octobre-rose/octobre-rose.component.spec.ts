import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctobreRoseComponent } from './octobre-rose.component';

describe('OctobreRoseComponent', () => {
  let component: OctobreRoseComponent;
  let fixture: ComponentFixture<OctobreRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctobreRoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctobreRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
