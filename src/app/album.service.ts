import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.albums = database.list('albums');
}

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string) {
    return this.database.object('albums/' + albumId);
  }

  callReddit() {
    return new Promise(function(resolve) {

    var request = new XMLHttpRequest();
    request.withCredentials = false;

    request.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        resolve(request.response)
      }
    });

    request.open("GET", "https://www.reddit.com/r/theworldisflat/search.json?restrict_sr=on&q=flat%20earth");


    request.send();
  });
  }
}
