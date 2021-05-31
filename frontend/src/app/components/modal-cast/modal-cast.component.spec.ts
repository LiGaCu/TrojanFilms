import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCastComponent } from './modal-cast.component';

describe('ModalCastComponent', () => {
  let component: ModalCastComponent;
  let fixture: ComponentFixture<ModalCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
