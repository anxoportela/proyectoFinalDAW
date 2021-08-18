import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import datosEjemplo from '../../../assets/data.json';

@Component({
  selector: 'app-mejor-valorados',
  templateUrl: './mejor-valorados.component.html',
  styleUrls: ['./mejor-valorados.component.css'],
})
export class MejorValoradosComponent implements OnInit {
  Datos: any = datosEjemplo;
  icFi = faArrowLeft;
  icFd = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
