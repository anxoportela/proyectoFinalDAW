import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  icFc = faFacebook;
  icTw = faTwitter;
  icIns = faInstagram;
  icMail = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
