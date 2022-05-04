import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-add-presupuesto',
  templateUrl: './add-presupuesto.component.html',
  styleUrls: ['./add-presupuesto.component.css']
})
export class AddPresupuestoComponent implements OnInit {

  presupuesto: number = 0;
  bPresupuesto: boolean = false;
  nombrePresupuesto: string = "";
  formularioNuevo: FormGroup
  constructor(private form: FormBuilder, private presu: PresupuestoService) { }

  ngOnInit(): void {
    this.formularioNuevoPresupuesto()
  }

  formularioNuevoPresupuesto() {
    this.formularioNuevo = this.form.group({
      nombre: ['', Validators.required],
      presupuesto: ['', Validators.required]
    })
  }
  agregoPresupuesto() {
    const presupuesto = {
      name: "Comida semana",
      fecha: new Date(),
      datos: {
        gasto1: 100,
        calle: 150
      }
    }
    this.presu.agregar(presupuesto).then(() => {
      console.log("Se agrego el presupuesto");
    });
  }

  nuevoPresupuesto() {
    if (this.formularioNuevo.valid) {
      this.nombrePresupuesto = this.formularioNuevo.value.nombre;
      this.presupuesto = this.formularioNuevo.value.presupuesto;
      this.bPresupuesto = true;
    }else{
      alert("Faltan datos")
    }
  }
}
