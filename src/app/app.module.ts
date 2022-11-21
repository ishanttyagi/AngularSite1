import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { WalletTermsComponent } from './wallet-terms/wallet-terms.component';
import { GpComponent } from './gp/gp.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PresenceComponent } from './presence/presence.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    WalletTermsComponent,
    GpComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    PresenceComponent,
    HomeComponent,
    ServiceComponent,
    Service1Component,
    Service2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
