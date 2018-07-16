import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlbsidebarComponent } from './wlbsidebar.component';

describe('WlbsidebarComponent', () => {
  let component: WlbsidebarComponent;
  let fixture: ComponentFixture<WlbsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlbsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlbsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
