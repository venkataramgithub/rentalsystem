import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgetComponent } from './rget.component';

describe('RgetComponent', () => {
  let component: RgetComponent;
  let fixture: ComponentFixture<RgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
