import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeService } from './home/services';
import { HomeModule } from './home/home.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ HomeModule ],
      providers: [
        HomeService,
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
