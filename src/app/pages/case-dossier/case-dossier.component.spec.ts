import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDossierComponent } from './case-dossier.component';

describe('CaseDossierComponent', () => {
  let component: CaseDossierComponent;
  let fixture: ComponentFixture<CaseDossierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseDossierComponent]
    });
    fixture = TestBed.createComponent(CaseDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
