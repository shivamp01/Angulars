import { Component, OnInit } from '@angular/core';
import { Router, ɵangular_packages_router_router_o } from '@angular/router';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  album : AlbumModel;
  generes : string[];

  constructor(private service : AlbumService, private router : Router) { 
    this.album = new AlbumModel();
    this.generes = ["Rock","Jazz","Pop","Rap"];
  }

  ngOnInit(): void {
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }

  saveAlbum() {
    this.service.addAlbum(this.album);
    this.router.navigate(['list']);
  }
}
