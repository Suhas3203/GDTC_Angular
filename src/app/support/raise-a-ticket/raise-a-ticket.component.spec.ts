import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseATicketComponent } from './raise-a-ticket.component';

describe('RaiseATicketComponent', () => {
  let component: RaiseATicketComponent;
  let fixture: ComponentFixture<RaiseATicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseATicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseATicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
