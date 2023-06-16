import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerDuSeinComponent } from './cancer-du-sein.component';

describe('CancerDuSeinComponent', () => {
  let component: CancerDuSeinComponent;
  let fixture: ComponentFixture<CancerDuSeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerDuSeinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancerDuSeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
