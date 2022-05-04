import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:any;
  foto:string;
  cont:number=0;
  presup:any[]=[];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.usuario=JSON.parse(localStorage.getItem('user'));
    this.foto=this.usuario.photoURL;
    // this.getPresupuestos();
  }

  SingOut(){
    this.authService.SignOut();
  }

 

listarPresupuestos(){

}

  // getPresupuestos(){
  //   this.presu.getPresupuestos().subscribe(presupuestos=>{
  //     presupuestos.forEach((element:any) => {
  //       this.presup.push({
  //         id:element.payload.doc.id,
  //         name:element.payload.doc.data(),
  //       }
  //         );
  //     });
  //   });
  // }

}
