import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wlbsidebar',
  templateUrl: './wlbsidebar.component.html',
  styleUrls: ['./wlbsidebar.component.css']
})
export class WlbsidebarComponent implements OnInit {
  state = {
    status: '2'
  };
  pstate () {
    // const xstate = {
    //   status: 'nubile',
    //   age: 'newish'
    // };
    // this.state = xstate;
    return this.state;
  }
  constructor() {
   // alert('wsidebar');
   this.pstate();
  }
  ngOnInit() {
     // const rslt = this.pstate();
     this.pstate().status = 'inite';
    //   status: 'excellent',
    //   age: 'newer'
    // };
    // alert(rslt.status);
   // return rslt;
  }


}
