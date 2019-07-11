import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "SpotifyApp";

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenType");
    window.location.href = "http://localhost:4200/";
  }
}
