import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimlpleFormComponent } from './simlple-form.component';

describe('SimlpleFormComponent', () => {
  let component: SimlpleFormComponent;
  let fixture: ComponentFixture<SimlpleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimlpleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimlpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
