import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopsieComponent } from './biopsie.component';

describe('BiopsieComponent', () => {
  let component: BiopsieComponent;
  let fixture: ComponentFixture<BiopsieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiopsieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopsieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
