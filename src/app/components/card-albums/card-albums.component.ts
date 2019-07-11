import { Component, OnInit, Input } from '@angular/core';
import { IArtistAlbums } from 'src/app/Interfaces/IArtistAlbums';
import { window } from 'rxjs/internal/operators/window';

@Component({
  selector: 'app-card-albums',
  templateUrl: './card-albums.component.html',
  styleUrls: ['./card-albums.component.css']
})
export class CardAlbumsComponent implements OnInit {

  @Input('album') album:IArtistAlbums;

  constructor() { }

  ngOnInit() {
  }

}
