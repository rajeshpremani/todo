import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskModel } from './add-task-model';

describe('AddTaskModel', () => {
  let component: AddTaskModel;
  let fixture: ComponentFixture<AddTaskModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskModel],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
