import { Component, OnInit } from '@angular/core';
import Noticia from 'src/app/shared/models/firebase-noticias.model';
import { NoticiasService } from 'src/app/shared/services/firecrud/noticias.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.css']
})
export class AddNoticiaComponent implements OnInit {

  noticia: Noticia = new Noticia();
  submitted = false;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(private noticiaService: NoticiasService) { }

  ngOnInit(): void {
  }

  saveNoticia(): void {
    this.noticia.author = JSON.parse(localStorage.getItem('user')).uid;
    this.noticia.published = new Date().toLocaleString();
    this.noticia.rating = "0";
    this.noticia.voted = [];
    this.noticiaService.create(this.noticia).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newNoticia(): void {
    this.submitted = false;
    this.noticia = new Noticia();
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;

    if (fileInput.target.files && fileInput.target.files[0]) {
      const max_size = 512000;
      const allowed_types = ['image/png', 'image/jpeg'];

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        alert(this.imageError);
        return false;
      }

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Kb';
        alert(this.imageError);
        return false;
      }

      var reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          this.noticia.image = imgBase64Path;
          // this.previewImagePath = imgBase64Path;
        }
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    };

    var nextSibling = fileInput.target.nextElementSibling;
    nextSibling.innerText = fileInput.target.files[0].name;
  }

}



