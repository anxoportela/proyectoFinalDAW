import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/firecrud/usuarios.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  Datos: any = null;
  headers = ["#", "Id", "Nombre", "eMail", "Rol"];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.retrieveUsuarios();
  }

  retrieveUsuarios(): void {
    this.usuariosService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.Datos = data;
    });
  }

}