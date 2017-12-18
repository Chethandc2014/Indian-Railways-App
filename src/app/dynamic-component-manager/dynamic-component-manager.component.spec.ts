import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentManagerComponent } from './dynamic-component-manager.component';

describe('DynamicComponentManagerComponent', () => {
  let component: DynamicComponentManagerComponent;
  let fixture: ComponentFixture<DynamicComponentManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
