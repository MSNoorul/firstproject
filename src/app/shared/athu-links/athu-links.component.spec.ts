import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthuLinksComponent } from './athu-links.component';

describe('AthuLinksComponent', () => {
  let component: AthuLinksComponent;
  let fixture: ComponentFixture<AthuLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthuLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
