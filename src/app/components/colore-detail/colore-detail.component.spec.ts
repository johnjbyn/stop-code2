import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreDetailComponent } from './colore-detail.component';

describe('ColoreDetailComponent', () => {
  let component: ColoreDetailComponent;
  let fixture: ComponentFixture<ColoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoreDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
