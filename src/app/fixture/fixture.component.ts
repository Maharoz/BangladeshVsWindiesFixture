import { OdiMatches } from './../odiMatches';
import { Match } from './../match';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  viewMode = 'odi'
   matches  = [

    {MatchNo : 1 , Venue: 'dhaka' , Date: '3 pm'},
    {MatchNo : 2 , Venue: 'khulna' , Date: '3 pm'}
    
    ];
    onSave(){
      console.log(this.matches);
    }
  constructor() {

  
   }

  ngOnInit() {
  }

}
