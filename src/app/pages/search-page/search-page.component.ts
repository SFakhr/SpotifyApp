import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyAPIService } from "src/app/services/spotifyAPI.service";
import { IArtist } from "src/app/Interfaces/IArtist";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  defaultData: string;

  flag: boolean = true;

  artistsArray: IArtist[];

  constructor(
    private userArtist: SpotifyAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Unproper login!");
      this.router.navigate(["/"]);
    }
    this.defaultData = "";
  }

  getArtists(searchArtist: string = "%20") {
    if (searchArtist.length == 0 || searchArtist.trim() == "")
      searchArtist = "%20";

    this.userArtist.getArtists(searchArtist).subscribe(data => {
      this.artistsArray = [];
      let responseData = data.artists.items;
      if (responseData.length > 0) {
        responseData.forEach(element => {
          let artistFields: IArtist;

          artistFields = {
            id: element.id,
            name: element.name
          };
          this.artistsArray.push(artistFields);
        });
      } else {
        return null;
      }
    });
  }

  artistSelected(artist: IArtist) {
    this.router.navigate(["/browsingArtist"], {
      queryParams: { ArtistID: artist.id, ArtistName: artist.name }
    });
  }
  artistChanged(artistName: string) {
    console.log(artistName);
    this.getArtists(artistName);
  }
}
