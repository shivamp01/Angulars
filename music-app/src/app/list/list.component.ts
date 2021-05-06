import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : AlbumModel[] = [];

  constructor(private service : AlbumService, private router : Router) { }

  ngOnInit(): void {
    this.list = this.service.getList();
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }

  delete(index : number) {
    var ans = confirm("Are you sure to delete?");
    if(ans)
      this.service.delAlbum(index);
  }

  orderByTitle() {
    this.service.sortByTitle();
  }

  orderByArtist() {
    this.list.sort((a,b) => a.artist > b.artist ? 1 : ((a.artist < b.artist ? -1 : 0)));
  }
}
