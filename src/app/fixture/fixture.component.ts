import { ODIMATCHES } from './../odiMatches';
import { Match } from './../match';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  viewMode = 'odi';
   matches  = ODIMATCHES;
    onSave(){
      console.log(this.matches);
    }
  constructor() {

  
   }

  ngOnInit() {
  }

}
