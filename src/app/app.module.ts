import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AthuLinksComponent } from './shared/athu-links/athu-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { ButtonComponent } from './shared/button/button.component';
import { TestComponent } from './test/test.component';
import { StarComponent } from './shared/star/star.component';
import { CardComponent } from './shared/card/card.component';
import { CourseFooterComponent } from './shared/card/course-footer/course-footer.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    AllCourseComponent,
    MenuComponent,
    AthuLinksComponent,
    SocialLinksComponent,
    EmailComponent,
    PhoneComponent,
    ButtonComponent,
    TestComponent,
    StarComponent,
    CardComponent,
    CourseFooterComponent,
    BlogFooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
