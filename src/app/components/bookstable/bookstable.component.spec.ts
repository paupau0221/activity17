import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstableComponent } from './bookstable.component';

describe('BookstableComponent', () => {
  let component: BookstableComponent;
  let fixture: ComponentFixture<BookstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookstableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
