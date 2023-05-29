import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppSignalComponent } from './my-app-signal.component';

describe('MyAppSignalComponent', () => {
  let component: MyAppSignalComponent;
  let fixture: ComponentFixture<MyAppSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyAppSignalComponent]
    });
    fixture = TestBed.createComponent(MyAppSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
