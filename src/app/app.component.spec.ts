import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CustomHeaderCheckboxComponent } from './custom-header-checkbox/custom-header-checkbox.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomHeaderCheckboxComponent
      ],
      imports: [
        AgGridModule.withComponents([ CustomHeaderCheckboxComponent ]),
        HttpClientModule,
      ],
      providers: [
        AppService,
        HttpClient,
      ],
    })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app)
      .toBeTruthy();
  });
});
