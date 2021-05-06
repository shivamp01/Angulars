import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  album : AlbumModel;
  query : string;
  criteria : string;

  constructor(private service : AlbumService, private router : Router) { 
    this.album = new AlbumModel();
  }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }

  search() {
    if(this.criteria == "Title")
      this.album = this.service.findByTitle(this.query);
    else if(this.criteria == "Artist")
      this.album = this.service.findByArtist(this.query);
    else if(this.criteria == "Genre")
      this.album = this.service.findByGenre(this.query);
  }
}
