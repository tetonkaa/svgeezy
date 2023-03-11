import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSVGSComponent } from './free-svgs.component';

describe('FreeSVGSComponent', () => {
  let component: FreeSVGSComponent;
  let fixture: ComponentFixture<FreeSVGSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeSVGSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeSVGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
