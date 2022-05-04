import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

export interface gastos {
  gasto: string;
  cantidad: number;
}

@Component({
  selector: 'app-add-presupuesto',
  templateUrl: './add-presupuesto.component.html',
  styleUrls: ['./add-presupuesto.component.css']
})
export class AddPresupuestoComponent implements OnInit {

  botonAccion: string = "Agregar gasto";
  porsentajeDisponible: number = 100;
  sumaGastos: number = 0;
  disponible: number = 0;
  presupuesto: number = 0;
  bPresupuesto: boolean = false;
  nombrePresupuesto: string = "";
  formularioNuevo: FormGroup;
  formularioGasto: FormGroup;
  listaGastos: gastos[] = [];
  indexGasto: number = -1;

  constructor(
    private form: FormBuilder, 
    private presupuestoS: PresupuestoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formularioNuevoPresupuesto();
    this.formularioGastos();

  }

  formularioNuevoPresupuesto() {
    this.formularioNuevo = this.form.group({
      nombre: ['', Validators.required],
      presupuesto: ['', Validators.required]
    })
  }

  formularioGastos() {
    this.formularioGasto = this.form.group({
      gasto: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
  }

  calcularPorcentajeP() {
    let porsentajeGasto = this.formularioGasto.value.cantidad / this.presupuesto * 100;
    // alert(porsentajeGasto);
    this.porsentajeDisponible -= porsentajeGasto;
    // alert(this.porsentajeDisponible);
  }
  calcularPorcentajeN(i: number) {
    let porsentajeGasto = this.listaGastos[i].cantidad / this.presupuesto * 100;
    // alert(porsentajeGasto);
    this.porsentajeDisponible += porsentajeGasto;
    // alert(this.porsentajeDisponible);
  }

  accionBoton() {
    if (this.botonAccion == "Agregar gasto") {
      this.agregarGasto();
    } else {
      if (this.botonAccion == "Editar gasto") {
        this.editarGasto(this.indexGasto);
      }
    }
  }

  eliminarTodo() {
    this.listaGastos = [];
    this.sumaGastos = 0;
    this.disponible = this.presupuesto;

  }
  agregarGasto() {
    if (this.formularioGasto.valid) {
      this.listaGastos.push(this.formularioGasto.value);
      this.sumaGastos += this.formularioGasto.value.cantidad;
      this.disponible = this.presupuesto - this.sumaGastos;
      this.calcularPorcentajeP();
      this.formularioGasto.reset();
    } else {
      alert("Faltan datos")
    }
  }
  editarGasto(i: number) {
    if (this.formularioGasto.valid) {
      this.disponible += this.listaGastos[i].cantidad;
      this.sumaGastos -= this.listaGastos[i].cantidad;
      this.calcularPorcentajeN(i);
      this.listaGastos[i].gasto = this.formularioGasto.value.gasto;
      this.listaGastos[i].cantidad = this.formularioGasto.value.cantidad;
      this.sumaGastos += this.formularioGasto.value.cantidad;
      this.calcularPorcentajeP();
      this.disponible -= this.listaGastos[i].cantidad;
      this.botonAccion = "Agregar gasto";
      this.formularioGasto.reset();
    } else {
      alert("Faltan datos")
    }
  }
  eliminarGasto(i: number) {
    this.disponible += this.listaGastos[i].cantidad;
    this.sumaGastos -= this.listaGastos[i].cantidad;
    this.calcularPorcentajeN(i);
    this.listaGastos.splice(i, 1);
    alert("Gasto eliminado");
  }

  gastoEditar(i: number) {
    this.formularioGasto.setValue({ gasto: this.listaGastos[i].gasto, cantidad: this.listaGastos[i].cantidad });
    this.indexGasto = i;
    this.botonAccion = "Editar gasto";
  }



  guardarPresupuesto() {
    if (window.confirm("¿Esta seguro de guardar el presupuesto?")) {
      const presupuesto = {
        nombre: this.nombrePresupuesto,
        fecha: new Date(),
        presupuesto: this.presupuesto,
        suma: this.sumaGastos,
        gastos: this.listaGastos

      }
      this.presupuestoS.agregar(presupuesto).then(() => {
        // console.log("Se agrego el presupuesto");
        this.router.navigateByUrl("historial-presupuesto")
      });
    }else{
      alert("No se guardo el presupuesto");
    }
  }

  nuevoPresupuesto() {
    if (this.formularioNuevo.valid) {
      this.nombrePresupuesto = this.formularioNuevo.value.nombre;
      this.presupuesto = this.formularioNuevo.value.presupuesto;
      this.disponible = this.presupuesto;
      this.bPresupuesto = true;

    } else {
      alert("Faltan datos")
    }
  }
}
