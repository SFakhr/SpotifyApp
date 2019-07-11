import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyAPIService {
  access_token: string;
  token_type: string;

  constructor(private httpClient: HttpClient) {
    this.access_token = localStorage.getItem("token");
    this.token_type = localStorage.getItem("tokenType");
  }

  baseURL: string = "https://accounts.spotify.com/authorize";
  client_id: string = "7b383db1bcf94328bd8dce7f18bfac5c"; // Your client id
  client_secret: string = "f8f627b752dd476eafc557169b8e74b0T"; // Your secret
  redirect_uri: string = "http://localhost:4200/callback"; // Your redirect uri
  scopes: string = "user-read-private";

  getUserAuthorization() {
    const url =
      this.baseURL +
      "?client_id=" +
      this.client_id +
      "&redirect_uri=" +
      this.redirect_uri +
      "&scope=" +
      this.scopes +
      "&response_type=token&state=123";

    window.location.replace(url);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client side eroor:", errorResponse.error);
    } else {
      console.error("Server side eroor:", errorResponse);
    }

    return throwError("This is a problem with the service.");
  }

  getArtists(artist: string): Observable<any> {
    const url =
      "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
    return this.httpClient
      .get<any>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: this.token_type + " " + this.access_token
        })
      })
      .pipe(catchError(this.handleError));
  }

  getArtist(artistID: string) {
    const url = "https://api.spotify.com/v1/artists/" + artistID;
    return this.httpClient
      .get<any>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: this.token_type + " " + this.access_token
        })
      })
      .pipe(catchError(this.handleError));
  }

  getAlbums(artistID: string) {
    const url =
      "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums?include_groups=album";
    return this.httpClient
      .get<any>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: this.token_type + " " + this.access_token
        })
      })
      .pipe(catchError(this.handleError));
  }
}
