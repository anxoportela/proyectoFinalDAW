import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import datosEjemplo from '../../../assets/data.json';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.css'],
})
export class RecomendadosComponent implements OnInit {
  Datos: any = datosEjemplo;
  icFi = faArrowLeft;
  icFd = faArrowRight;

  ngOnInit(): void {}
}
