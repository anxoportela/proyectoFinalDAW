import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  model: NgbDateStruct;
  iconCal = faCalendar;
  rangevalue = 0;

  valueChanged(e) {
    this.rangevalue = e.target.value;
  }
  constructor() {}

  ngOnInit(): void {}
}
