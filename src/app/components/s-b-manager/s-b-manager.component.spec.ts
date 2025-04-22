import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBManagerComponent } from './s-b-manager.component';

describe('SBManagerComponent', () => {
  let component: SBManagerComponent;
  let fixture: ComponentFixture<SBManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SBManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
