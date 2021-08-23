import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import FirebaseNoticias from '../../models/firebase-noticias.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private dbPath = '/noticias';

  busqRef: AngularFirestoreCollection<FirebaseNoticias>;

  constructor(private db: AngularFirestore) {
    this.busqRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FirebaseNoticias> {
    return this.busqRef;
  }

  getById(id: string){
    return this.busqRef.doc(id).valueChanges();
  }

  getByName(name: string) {
    return this.busqRef.doc(name).valueChanges();
  }

  getByTitle(title: string){
    return this.busqRef.doc(title).valueChanges();
  }

}
