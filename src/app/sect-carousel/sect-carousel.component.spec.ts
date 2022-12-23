import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectCarouselComponent } from './sect-carousel.component';

describe('SectCarouselComponent', () => {
  let component: SectCarouselComponent;
  let fixture: ComponentFixture<SectCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
