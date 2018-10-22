import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  console.log('')
  this.albums = database.list('albums'); }

  getAlbums() {
    return this.albums;
  }

  // getAlbumById(albumId: number) {
  //   for(var i = 0; i < this.albums.length; i++) {
  //     if(this.albums[i].id === albumId) {
  //       return this.albums[i];
  //     }
  //   }
  // }
}
