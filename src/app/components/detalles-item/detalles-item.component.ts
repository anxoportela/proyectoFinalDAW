import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/firecrud/store.service';

@Component({
  selector: 'app-detalles-item',
  templateUrl: './detalles-item.component.html',
  styleUrls: ['./detalles-item.component.css']
})
export class DetallesItemComponent implements OnInit {

  constructor(private Activatedroute: ActivatedRoute,
    private storeService: StoreService) {
  }

  DatoUnico: any = null;
  id: any = null;

  ngOnInit(): void {

    this.id = this.Activatedroute.snapshot.paramMap.get("id");
    this.storeService.getById(this.id).subscribe(data => {
      this.DatoUnico = data;
    })
  }

}
