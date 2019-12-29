import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOpeningComponent } from './item-opening.component';

describe('ItemOpeningComponent', () => {
  let component: ItemOpeningComponent;
  let fixture: ComponentFixture<ItemOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
