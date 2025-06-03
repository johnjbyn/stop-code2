import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoriListComponent } from './colori-list.component';

describe('ColoriListComponent', () => {
  let component: ColoriListComponent;
  let fixture: ComponentFixture<ColoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoriListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
