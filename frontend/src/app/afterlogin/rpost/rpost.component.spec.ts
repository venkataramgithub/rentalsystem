import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpostComponent } from './rpost.component';

describe('RpostComponent', () => {
  let component: RpostComponent;
  let fixture: ComponentFixture<RpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
