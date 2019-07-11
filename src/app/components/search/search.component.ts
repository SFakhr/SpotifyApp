import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { SpotifyAPIService } from "src/app/services/spotifyAPI.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IArtist } from "src/app/Interfaces/IArtist";
import { isNull } from "@angular/compiler/src/output/output_ast";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { isUndefined } from "util";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input("defaultData") defaultData: IArtist;
  @Input("artistsArray") artistsArray: IArtist[];
  @Output() searchChangeValue = new EventEmitter<string>();
  @Output() selectedArtist = new EventEmitter<IArtist>();

  ArtistID: string;
  ArtistName: string;
  control = new FormControl();

  Artist: IArtist;

  constructor(
    private userArtist: SpotifyAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    if (this.defaultData.name) this.control.setValue(this.defaultData.name);
    this.control.valueChanges.subscribe((value: string) => {
      this.searchChangeValue.emit(value);
    });
  }

  submitArtist(artistID: string, artistName: string) {
    this.Artist = {
      id: artistID,
      name: artistName
    };
    this.control.setValue(this.Artist.name);
    this.selectedArtist.emit(this.Artist);
  }
}
