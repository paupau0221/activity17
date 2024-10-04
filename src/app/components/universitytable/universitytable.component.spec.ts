import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitytableComponent } from './universitytable.component';

describe('UniversitytableComponent', () => {
  let component: UniversitytableComponent;
  let fixture: ComponentFixture<UniversitytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversitytableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
