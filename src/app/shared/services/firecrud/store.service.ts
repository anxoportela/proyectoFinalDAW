import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import FirebaseStore from '../../models/firebase-store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private dbPath = '/store';

  storeRef: AngularFirestoreCollection<FirebaseStore>;

  constructor(private db: AngularFirestore) {
    this.storeRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FirebaseStore> {
    return this.storeRef;
  }

  getById(id: string){
    return this.storeRef.doc(id).valueChanges();
  }

  create(item: FirebaseStore): any {
    return this.storeRef.add({ ...item });
  }

  update(id: string, data: any): Promise<void> {
    return this.storeRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.storeRef.doc(id).delete();
  }
}