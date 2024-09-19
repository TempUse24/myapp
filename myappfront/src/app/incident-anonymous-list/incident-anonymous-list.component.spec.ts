import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAnonymousListComponent } from './incident-anonymous-list.component';

describe('IncidentAnonymousListComponent', () => {
  let component: IncidentAnonymousListComponent;
  let fixture: ComponentFixture<IncidentAnonymousListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentAnonymousListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentAnonymousListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
