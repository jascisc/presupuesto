import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPresupuestoComponent } from './components/add-presupuesto/add-presupuesto.component';

const routes: Routes = [
  {path:'add-presupuesto',component:AddPresupuestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
