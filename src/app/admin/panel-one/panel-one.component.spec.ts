import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOneComponent } from './panel-one.component';

describe('PanelOneComponent', () => {
  let component: PanelOneComponent;
  let fixture: ComponentFixture<PanelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
