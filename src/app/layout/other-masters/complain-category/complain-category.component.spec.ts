import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCategoryComponent } from './complain-category.component';

describe('ComplainCategoryComponent', () => {
  let component: ComplainCategoryComponent;
  let fixture: ComponentFixture<ComplainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
