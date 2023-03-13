import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDetailComponent } from './svg-detail.component';

describe('SvgDetailComponent', () => {
  let component: SvgDetailComponent;
  let fixture: ComponentFixture<SvgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
