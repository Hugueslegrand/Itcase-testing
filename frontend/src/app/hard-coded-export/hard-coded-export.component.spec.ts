import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCodedExportComponent } from './hard-coded-export.component';

describe('HardCodedExportComponent', () => {
  let component: HardCodedExportComponent;
  let fixture: ComponentFixture<HardCodedExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCodedExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardCodedExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
