import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelServiceComponent } from './hotel-service.component';

describe('HotelServiceComponent', () => {
  let component: HotelServiceComponent;
  let fixture: ComponentFixture<HotelServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelServiceComponent]
    });
    fixture = TestBed.createComponent(HotelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
