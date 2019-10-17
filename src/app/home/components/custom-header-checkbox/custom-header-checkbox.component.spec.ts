import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomHeaderCheckboxComponent } from './custom-header-checkbox.component';

describe('CustomHeaderCheckboxComponent', () => {
  let component: CustomHeaderCheckboxComponent;
  let fixture: ComponentFixture<CustomHeaderCheckboxComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeaderCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
