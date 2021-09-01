import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'crud', pathMatch: 'full'},
  {path: 'crud', loadChildren: ()=>import('./crud/crud.module').then(m=>m.CRUDModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
