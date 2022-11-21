import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GpComponent } from './gp/gp.component';
import { AboutComponent } from './about/about.component';
import { PresenceComponent } from './presence/presence.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { WalletTermsComponent } from './wallet-terms/wallet-terms.component';
const routes: Routes = [
  {path: 'terms', component: TermsComponent },

  {path: 'presence', component: PresenceComponent },
  {path: 'gp', component: GpComponent },
  {path: 'app', component: AppComponent },
  {path: 'about', component: AboutComponent },
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'service', component: ServiceComponent },
  {path: 'wallet-terms', component: WalletTermsComponent },
  {path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
