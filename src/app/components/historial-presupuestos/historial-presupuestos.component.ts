import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-historial-presupuestos',
  templateUrl: './historial-presupuestos.component.html',
  styleUrls: ['./historial-presupuestos.component.css']
})
export class HistorialPresupuestosComponent implements OnInit {

  listaPresupuestos: any[] = [];
  constructor(private apiPre:PresupuestoService) { }

  ngOnInit(): void {
    this.listaPresupuestos=[]
    this.apiPre.getPresupuestos().subscribe(doc=>{
      // console.log(doc);
      doc.forEach((element:any) => {
        this.listaPresupuestos.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        });
        // console.log(this.listaPresupuestos);
      })
    });
  }

}
