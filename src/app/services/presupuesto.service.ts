import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  bd:string
  usuario:any
  constructor(private firestore:AngularFirestore) {
    this.usuario=JSON.parse(localStorage.getItem('user'));
    this.bd=this.usuario.email;
   }

  agregar(presupuesto:any):Promise<any>{
    return this.firestore.collection(this.bd).add(presupuesto);
  }

  getPresupuestos():Observable<any>{
    return this.firestore.collection(this.bd,ref => ref.orderBy('fecha','desc')).snapshotChanges();
  }

}
