import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredenzialiErratiComponent } from './credenziali-errati.component';

describe('CredenzialiErratiComponent', () => {
  let component: CredenzialiErratiComponent;
  let fixture: ComponentFixture<CredenzialiErratiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredenzialiErratiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredenzialiErratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
