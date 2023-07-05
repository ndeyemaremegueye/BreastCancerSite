import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabagismeComponent } from './tabagisme.component';

describe('TabagismeComponent', () => {
  let component: TabagismeComponent;
  let fixture: ComponentFixture<TabagismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabagismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabagismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
