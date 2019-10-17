import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';

import { HomeComponent } from './home.component';
import { HomeService } from './services';
import { CustomHeaderCheckboxComponent } from './components/custom-header-checkbox/custom-header-checkbox.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CustomHeaderCheckboxComponent
      ],
      imports: [
        AgGridModule.withComponents([ CustomHeaderCheckboxComponent ]),
        HttpClientModule,
      ],
      providers: [
        HomeService,
        HttpClient,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
