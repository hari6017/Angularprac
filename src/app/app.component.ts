import { Component, OnInit } from '@angular/core';
import {PLAYER}  from './players';
import {AppService} from './app.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <ul>
  <li *ngFor = "let x of player" (click)="clicked(x)">
       {{x.name}}

     </li>
     </ul>
     <div *ngIf = "selected">
     <h1>{{selected.centuries}}</h1>

      </div>
   `,
   providers : [AppService],
})
export class AppComponent implements OnInit {
constructor(private appservice: AppService){

}
name = 'Angular';

  player : PLAYER[];
  selected : PLAYER;
  getPlayers() : void
  {
    this.player = this.appservice.getPlayers();
  }

  ngOnInit(): void {
  this.getPlayers();
}

clicked(x:PLAYER):void {

  this.selected = x;
  console.log(this.selected.centuries);
}
}
