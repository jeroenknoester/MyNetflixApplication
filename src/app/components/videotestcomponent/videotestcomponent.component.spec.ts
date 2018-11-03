import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotestcomponentComponent } from './videotestcomponent.component';

describe('VideotestcomponentComponent', () => {
  let component: VideotestcomponentComponent;
  let fixture: ComponentFixture<VideotestcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotestcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
