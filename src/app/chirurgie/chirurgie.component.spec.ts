import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirurgieComponent } from './chirurgie.component';

describe('ChirurgieComponent', () => {
  let component: ChirurgieComponent;
  let fixture: ComponentFixture<ChirurgieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChirurgieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChirurgieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
