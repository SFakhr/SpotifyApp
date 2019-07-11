import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotifyAPI.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userData: any;


  constructor(private userAuth:SpotifyAPIService) { }

  ngOnInit() {
    
  }

  login() {

    this.userAuth.getUserAuthorization();    
  }
}

