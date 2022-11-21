import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTermsComponent } from './wallet-terms.component';

describe('WalletTermsComponent', () => {
  let component: WalletTermsComponent;
  let fixture: ComponentFixture<WalletTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
