import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { BrowsingArtistsComponent } from 'src/app/pages/browsing-artists/browsing-artists.component';
import { BrowsingArtistsAlbumsComponent } from 'src/app/pages/browsing-artists-albums/browsing-artists-albums.component';
import { SearchPageComponent } from 'src/app/pages/search-page/search-page.component';
import { CallbackComponent } from 'src/app/pages/callback/callback.component';


const routes: Routes = [
  {path:"search",component:SearchPageComponent},
  {path:"browsingArtist",component:BrowsingArtistsComponent},
  {path:"browsingArtistAlbums",component:BrowsingArtistsAlbumsComponent},
  {path: 'callback',component:CallbackComponent},
  {path: "", component: LoginPageComponent},
  {path: '**',component:PageNotFoundComponent},
  {path: '',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
