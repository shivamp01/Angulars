import { Injectable } from '@angular/core';
import { AlbumModel } from 'src/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums : AlbumModel[] = [];

  constructor() { }

  addAlbum(album : AlbumModel) {
    this.albums.push(album);
  }

  getList() {
    return this.albums;
  }

  delAlbum(index : number) {
    return this.albums.splice(index, 1);
  }

  sortByTitle() {
    this.albums.sort((a,b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0));
    return this.albums;
  }

  findByTitle(title : string) {
    return this.albums.find(x => x.title == title);
  }

  findByArtist(artist : string) {
    return this.albums.find(x => x.artist == artist);
  }

  findByGenre(genre : string) {
    return this.albums.find(x => x.genre == genre);
  }
}
