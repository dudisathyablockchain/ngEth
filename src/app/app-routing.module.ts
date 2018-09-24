import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IpfsComponent } from './components/ipfs/ipfs.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'ipfs',
        component: IpfsComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only 
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
export class AppRoutingModule { }