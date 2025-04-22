import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQuestionComponent } from './f-a-question.component';

describe('FAQuestionComponent', () => {
  let component: FAQuestionComponent;
  let fixture: ComponentFixture<FAQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
