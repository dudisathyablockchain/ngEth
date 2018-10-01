import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IpfsComponent } from './components/ipfs/ipfs.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { StudentSearchComponent } from './components/student-search/student-search.component';


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
        path: 'ngEdu',
        component: MainComponent
    },
    {
        path: 'ipfs',
        component: IpfsComponent
    },
    {
        path: 'studentSearch',
        component: StudentSearchComponent
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