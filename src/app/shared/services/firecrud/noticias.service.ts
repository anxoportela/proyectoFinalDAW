import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import FirebaseNoticias from '../../models/firebase-noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private dbPath = '/noticias';

  noticiasRef: AngularFirestoreCollection<FirebaseNoticias>;

  constructor(private db: AngularFirestore) {
    this.noticiasRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FirebaseNoticias> {
    return this.noticiasRef;
  }

  getById(id: string){
    return this.noticiasRef.doc(id).valueChanges();
  }

  create(noticia: FirebaseNoticias): any {
    return this.noticiasRef.add({ ...noticia });
  }

  update(id: string, data: any): Promise<void> {
    return this.noticiasRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.noticiasRef.doc(id).delete();
  }
}
