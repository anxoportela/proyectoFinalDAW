import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import FirebaseUsuarios from '../../models/firebase-usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dbPath = '/users';

  usuariosRef: AngularFirestoreCollection<FirebaseUsuarios>;

  constructor(private db: AngularFirestore) {
    this.usuariosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<FirebaseUsuarios> {
    return this.usuariosRef;
  }

  getById(id: string){
    return this.usuariosRef.doc(id).valueChanges();
  }

  create(usuario: FirebaseUsuarios): any {
    return this.usuariosRef.add({ ...usuario });
  }

  update(id: string, data: any): Promise<void> {
    return this.usuariosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.usuariosRef.doc(id).delete();
  }
}
