import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPresupuestoComponent } from './components/add-presupuesto/add-presupuesto.component';
import { HistorialPresupuestosComponent } from './components/historial-presupuestos/historial-presupuestos.component';

const routes: Routes = [
  // {path:'',component:HistorialPresupuestosComponent},
  {path:'add-presupuesto',component:AddPresupuestoComponent},
  {path:'historial-presupuesto',component:HistorialPresupuestosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
