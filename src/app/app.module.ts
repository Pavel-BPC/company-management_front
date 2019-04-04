import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
import{ OrderService } from './order.service';
import {RouterModule} from '@angular/router';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './content/services/services.component';
import { ReviewsComponent } from './content/reviews/reviews.component';
import { PartnersComponent } from './content/partners/partners.component';
import { FormComponent } from './content/form/form.component';
import { ImagesComponent } from './content/images/images.component';
import { DevelopmentComponent } from './content/services/development/development.component';
import { AnaliticsComponent } from './content/services/analitics/analitics.component';
import { TechnologiesComponent } from './content/services/technologies/technologies.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { GetdataComponent } from './getdata/getdata.component';
import { EditdataComponent } from './getdata/editdata/editdata.component';
import { BAComponent } from './ba/ba.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './ba/projects/projects.component';
import { RequestsComponent } from './ba/requests/requests.component';


const routes = [
  {path: '', component: ContentComponent},
  {path: 'table', component: GetdataComponent},
  {path: 'edit/:id', component: EditdataComponent},
  {path: 'login', component: LoginComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ServicesComponent,
    ReviewsComponent,
    PartnersComponent,
    FormComponent,
    ImagesComponent,
    DevelopmentComponent,
    AnaliticsComponent,
    TechnologiesComponent,
    ContactsComponent,
    GetdataComponent,
    EditdataComponent,
    BAComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    ProjectsComponent,
    RequestsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
