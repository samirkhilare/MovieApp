import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTVComponent } from './live-tv.component';

describe('LiveTVComponent', () => {
  let component: LiveTVComponent;
  let fixture: ComponentFixture<LiveTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveTVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
