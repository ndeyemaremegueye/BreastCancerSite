import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimiotherapieComponent } from './chimiotherapie.component';

describe('ChimiotherapieComponent', () => {
  let component: ChimiotherapieComponent;
  let fixture: ComponentFixture<ChimiotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChimiotherapieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChimiotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
