import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationBoardComponent } from './investigation-board.component';

describe('InvestigationBoardComponent', () => {
  let component: InvestigationBoardComponent;
  let fixture: ComponentFixture<InvestigationBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestigationBoardComponent]
    });
    fixture = TestBed.createComponent(InvestigationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
