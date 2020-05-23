import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartproeuctComponent } from './cartproeuct.component';

describe('CartproeuctComponent', () => {
  let component: CartproeuctComponent;
  let fixture: ComponentFixture<CartproeuctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartproeuctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartproeuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
