import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import  {BolaComponent} from './bola/bola.component';

const appRoutes:Routes=[
   {path: 'login' , component: LoginComponent },
   {path: '', component: HomeComponent},
   {path: 'bola', component: BolaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
