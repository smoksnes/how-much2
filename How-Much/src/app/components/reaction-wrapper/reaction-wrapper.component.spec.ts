import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionWrapperComponent } from './reaction-wrapper.component';

describe('ReactionWrapperComponent', () => {
  let component: ReactionWrapperComponent;
  let fixture: ComponentFixture<ReactionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactionWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
