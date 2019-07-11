import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.fragment.subscribe(fragment => {
      try {
        let re = /\&/gi;
        let url = fragment.replace(re, "#");
        let urlFrgments = url.split('#');
        if (urlFrgments.length > 2) {
          const access_token = (urlFrgments[0].split('='))[1].toString();
          const token_type = (urlFrgments[1].split('='))[1].toString();
          const expires_in = (urlFrgments[2].split('='))[1].toString();
          const state = (urlFrgments[3].split('='))[1].toString();

          localStorage.setItem("token", (urlFrgments[0].split('='))[1].toString());
          localStorage.setItem("tokenType", (urlFrgments[1].split('='))[1].toString());

          this.router.navigate(['/search']);
        }
        else {
          this.router.navigate(['/']);
        }
      }
      catch (e) {
        console.log(e);
        alert("Something went wrong, please try again later!");
        this.router.navigate(['/']);
      }
    });
  }
}
