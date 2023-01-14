import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaddhomeComponent } from './viewaddhome.component';

describe('ViewaddhomeComponent', () => {
  let component: ViewaddhomeComponent;
  let fixture: ComponentFixture<ViewaddhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaddhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaddhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
