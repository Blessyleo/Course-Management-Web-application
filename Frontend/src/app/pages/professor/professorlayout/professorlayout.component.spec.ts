import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorlayoutComponent } from './professorlayout.component';

describe('ProfessorlayoutComponent', () => {
  let component: ProfessorlayoutComponent;
  let fixture: ComponentFixture<ProfessorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
