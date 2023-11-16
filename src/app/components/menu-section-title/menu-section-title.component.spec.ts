import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionTitleComponent } from './menu-section-title.component';

describe('MenuSectionTitleComponent', () => {
  let component: MenuSectionTitleComponent;
  let fixture: ComponentFixture<MenuSectionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSectionTitleComponent]
    });
    fixture = TestBed.createComponent(MenuSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
