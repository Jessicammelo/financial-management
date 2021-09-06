import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteInputComponent } from './teste-input.component';

describe('TesteInputComponent', () => {
  let component: TesteInputComponent;
  let fixture: ComponentFixture<TesteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
