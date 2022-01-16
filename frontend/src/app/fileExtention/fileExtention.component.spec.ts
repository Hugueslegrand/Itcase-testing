import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationBuilderComponent } from './configurationBuilder.component';

describe('ConfigurationBuilderComponent', () => {
  let component: ConfigurationBuilderComponent;
  let fixture: ComponentFixture<ConfigurationBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
