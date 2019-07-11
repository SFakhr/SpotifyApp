import { Component, OnInit, Input } from "@angular/core";
import { IArtist } from "src/app/Interfaces/IArtist";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input("artist") artist: IArtist;

  maxStarsNum: number = 5;

  constructor() {}

  ngOnInit() {}
}
