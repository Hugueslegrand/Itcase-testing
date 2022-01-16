import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingTableBuilderComponent } from './mappingTableBuilder.component';

describe('MappingTableBuilderComponent', () => {
  let component: MappingTableBuilderComponent;
  let fixture: ComponentFixture<MappingTableBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingTableBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingTableBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
