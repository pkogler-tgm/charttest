import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactComponent} from './contact.component';

// @ts-ignore
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
// @ts-ignore
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
      .compileComponents();
  }));
// @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
