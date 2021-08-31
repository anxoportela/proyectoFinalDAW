import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/shared/services/firecrud/store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  Datos: any = null;

  constructor(private tiendaService: StoreService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.tiendaService.getAll().snapshotChanges().pipe(
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
