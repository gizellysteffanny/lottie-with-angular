import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingViewEditionsComponent } from './loading-view-editions.component';

describe('LoadingViewEditionsComponent', () => {
  let component: LoadingViewEditionsComponent;
  let fixture: ComponentFixture<LoadingViewEditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingViewEditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingViewEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
