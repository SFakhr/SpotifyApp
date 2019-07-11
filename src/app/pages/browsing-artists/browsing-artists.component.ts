import { Component, OnInit } from "@angular/core";
import { IArtist } from "src/app/Interfaces/IArtist";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyAPIService } from "src/app/services/spotifyAPI.service";

@Component({
  selector: "app-browsing-artists",
  templateUrl: "./browsing-artists.component.html",
  styleUrls: ["./browsing-artists.component.css"]
})
export class BrowsingArtistsComponent implements OnInit {
  artistsArray: IArtist[];

  defaultData: IArtist;
  Artist_ID: string;
  Artist_Name: string;

  constructor(
    private route: ActivatedRoute,
    private artistData: SpotifyAPIService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Unproper login!");
      this.router.navigate(["/"]);
    }

    this.route.queryParams.subscribe(data => {
      this.Artist_ID = data.ArtistID;
      this.Artist_Name = data.ArtistName;

      this.defaultData = {
        id: this.Artist_ID,
        name: this.Artist_Name
      };
    });
    this.getArtists(this.Artist_Name);
  }

  getAlbums(artistInfo: IArtist) {
    this.router.navigate(["/browsingArtistAlbums"], {
      queryParams: { ArtistID: artistInfo.id, ArtistName: artistInfo.name }
    });
  }

  artistSelected(artist: IArtist) {
    this.getArtists(artist.name);
  }

  artistChanged(artistName: string) {
    this.getArtists(artistName);
  }

  getArtists(q: string = "%20") {
    if (q.length == 0 || q.trim() == "") q = "%20";

    this.artistData.getArtists(q).subscribe(data => {
      this.artistsArray = [];
      let responseData = data.artists.items;
      if (responseData.length > 0) {
        responseData.forEach(element => {
          let artistFields: IArtist;

          artistFields = {
            id: element.id,
            name: element.name,
            popularity:
              element.popularity < 20
                ? 1
                : element.popularity < 40
                ? 2
                : element.popularity < 60
                ? 3
                : element.popularity < 80
                ? 4
                : 5,
            followers: element.followers.total,
            image:
              element.images.length > 0
                ? element.images[0].url
                : "data:image/png;base64,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"
          };
          this.artistsArray.push(artistFields);
        });
      } else {
        return null;
      }
    });
  }
}
