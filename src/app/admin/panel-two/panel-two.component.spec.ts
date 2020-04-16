import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTwoComponent } from './panel-two.component';

describe('PanelTwoComponent', () => {
  let component: PanelTwoComponent;
  let fixture: ComponentFixture<PanelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
