import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNvBarComponent } from './top-nv-bar.component';

describe('TopNvBarComponent', () => {
  let component: TopNvBarComponent;
  let fixture: ComponentFixture<TopNvBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNvBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
