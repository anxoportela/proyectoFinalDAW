import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoticiasService } from 'src/app/shared/services/firecrud/noticias.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {

  Datos: any = null;

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.retrieveNoticias();
  }

  retrieveNoticias(): void {
    this.noticiasService.getAll().snapshotChanges().pipe(
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
