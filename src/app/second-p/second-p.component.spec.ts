import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPComponent } from './second-p.component';

describe('SecondPComponent', () => {
  let component: SecondPComponent;
  let fixture: ComponentFixture<SecondPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
