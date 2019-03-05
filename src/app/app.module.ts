import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule} from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
import{ OrderService } from './order.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
