import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopalpationComponent } from './autopalpation.component';

describe('AutopalpationComponent', () => {
  let component: AutopalpationComponent;
  let fixture: ComponentFixture<AutopalpationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutopalpationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutopalpationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
