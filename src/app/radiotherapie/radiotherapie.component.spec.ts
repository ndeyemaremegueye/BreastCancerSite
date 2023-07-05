import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiotherapieComponent } from './radiotherapie.component';

describe('RadiotherapieComponent', () => {
  let component: RadiotherapieComponent;
  let fixture: ComponentFixture<RadiotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiotherapieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
