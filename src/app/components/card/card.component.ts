import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/Inetrfaces/IArtist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input('artists') artists:IArtist;

maxStarsNum:number = 5;
  
  constructor() { }

  ngOnInit() {


  }

}
