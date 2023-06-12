import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionsComponent } from './preventions.component';

describe('PreventionsComponent', () => {
  let component: PreventionsComponent;
  let fixture: ComponentFixture<PreventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
