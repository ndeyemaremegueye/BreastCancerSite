import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesCancerComponent } from './types-cancer.component';

describe('TypesCancerComponent', () => {
  let component: TypesCancerComponent;
  let fixture: ComponentFixture<TypesCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesCancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
