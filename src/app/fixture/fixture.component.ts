import { TESTMATCHES } from './../testMacthes';
import { TWENTY } from './../tTwentyMatches';
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


   odimatches  = ODIMATCHES;
   
   twentyMatches =TWENTY;
    
   testmatche = TESTMATCHES;
   
   
  constructor() {

  
   }

  ngOnInit() {
  }

}
