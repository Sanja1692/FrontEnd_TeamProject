import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CustomersComponent } from './customers/customers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GaleryComponent } from './galery/galery.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
const routes: Routes = [
  {
    path: "galery",
    component: GaleryComponent
  }
];
const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestimonialsComponent,
    CustomersComponent,
    NavbarComponent,
    HeroComponent,
    AwardsComponent,
    ContactsComponent,
    SocialMediaComponent,
    PortfolioComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
