import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarComponent } from './delet-car.component';

describe('DeletCarComponent', () => {
  let component: DeleteCarComponent;
  let fixture: ComponentFixture<DeleteCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCarComponent]
    });
    fixture = TestBed.createComponent(DeleteCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
