import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycustombarComponent } from './mycustombar.component';

describe('MycustombarComponent', () => {
  let component: MycustombarComponent;
  let fixture: ComponentFixture<MycustombarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycustombarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycustombarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
