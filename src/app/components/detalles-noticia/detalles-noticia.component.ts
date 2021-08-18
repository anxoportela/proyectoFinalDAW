import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/shared/services/firecrud/noticias.service';


@Component({
  selector: 'app-detalles-noticia',
  templateUrl: './detalles-noticia.component.html',
  styleUrls: ['./detalles-noticia.component.css']
})

export class DetallesNoticiaComponent implements OnInit {

  constructor(private Activatedroute: ActivatedRoute,
    private noticiasService: NoticiasService) {
  }

  DatoUnico: any = null;
  id: any = null;

  ngOnInit(): void {

    this.id = this.Activatedroute.snapshot.paramMap.get("id");
    this.noticiasService.getById(this.id).subscribe(data => {
      this.DatoUnico = data;
    })
  }

}