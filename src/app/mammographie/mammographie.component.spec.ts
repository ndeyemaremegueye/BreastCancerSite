import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammographieComponent } from './mammographie.component';

describe('MammographieComponent', () => {
  let component: MammographieComponent;
  let fixture: ComponentFixture<MammographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MammographieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MammographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
