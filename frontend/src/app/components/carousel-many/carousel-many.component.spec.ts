import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselManyComponent } from './carousel-many.component';

describe('CarouselManyComponent', () => {
  let component: CarouselManyComponent;
  let fixture: ComponentFixture<CarouselManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
