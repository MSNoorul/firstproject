import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:PagesComponent,path:'pages'},
  {component:ContactComponent,path:'contact'},
  {component:BlogComponent,path:'blog'},
  {component:AllCourseComponent,path:'all-course'},
  {component:TestComponent,path:'test'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
