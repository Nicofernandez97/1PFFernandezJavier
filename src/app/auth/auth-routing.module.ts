import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [

    {
        path:"",
        component: AuthComponent,
        children: [{
            path: "login",
            loadChildren : () => import("./modules/login/login.module").then( (arch) => arch.LoginModule)
        },
        
    {
        path: "**",
        redirectTo: "login"
    }
    ]
    },
    {
        path: "**",
        redirectTo: "login"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
