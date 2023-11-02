import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PostOnboardLandingPageComponent } from './post-onboard-landing-page/post-onboard-landing-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'',component:SigninComponent },
  {path:'signup',component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'home', component:PostOnboardLandingPageComponent},
  {path:'adminHome', component:AdminHomeComponent},
  {path:'addProduct', component:AddProductComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
