import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {RxjsComponent} from "./rxjs/rxjs.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: 'user/list',
    component:UserListComponent,
    children: []
  },
  {
    path:'user/add',
    component:UserEditComponent,
  },
  {
    path:'user/edit/:id',
    component:UserEditComponent,
  },
  {
    path:'user/:id',
    component:UserDetailComponent,
  },
  {
    path:'rxjs',
    component:RxjsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }