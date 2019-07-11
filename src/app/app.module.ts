import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatToolbarModule } from "@angular/material/toolbar";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";

import { SearchComponent } from "./components/search/search.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CardComponent } from "src/app/components/card/card.component";
import { BrowsingArtistsComponent } from "./pages/browsing-artists/browsing-artists.component";
import { BrowsingArtistsAlbumsComponent } from "./pages/browsing-artists-albums/browsing-artists-albums.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { CardAlbumsComponent } from "src/app/components/card-albums/card-albums.component";
import { CallbackComponent } from "src/app/pages/callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    SearchComponent,
    CardComponent,
    BrowsingArtistsComponent,
    BrowsingArtistsAlbumsComponent,
    SearchPageComponent,
    CardAlbumsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
