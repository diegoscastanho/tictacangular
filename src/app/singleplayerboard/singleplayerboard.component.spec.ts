import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleplayerboardComponent } from './singleplayerboard.component';

describe('SingleplayerboardComponent', () => {
  let component: SingleplayerboardComponent;
  let fixture: ComponentFixture<SingleplayerboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleplayerboardComponent]
    });
    fixture = TestBed.createComponent(SingleplayerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
