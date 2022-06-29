import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GaleryComponent } from './galery/galery.component';

const routes: Routes = [
  {path: "", component: AboutComponent},
  {path: "app-about", component: AboutComponent},
  {path: "app-awards", component: AwardsComponent},
  {path: "app-contacts", component: ContactsComponent},
  {path: "app-testimonials", component: TestimonialsComponent},
  {path: "app-galery", component: GaleryComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
