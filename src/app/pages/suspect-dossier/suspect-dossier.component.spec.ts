import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectDossierComponent } from './suspect-dossier.component';

describe('SuspectDossierComponent', () => {
  let component: SuspectDossierComponent;
  let fixture: ComponentFixture<SuspectDossierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuspectDossierComponent]
    });
    fixture = TestBed.createComponent(SuspectDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
