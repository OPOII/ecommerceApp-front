import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from './show.products.component';

describe('AgregarProductoComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductsComponent]
    });
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
