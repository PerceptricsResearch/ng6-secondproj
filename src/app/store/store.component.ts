import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from '../dbmanager.service';
import { Observable } from 'rxjs';

const utils = function () {
  return {
    xme: function(x) {
      return x || 'fabuloso' ;
    }
  };
 };
 const xstate = function() {
   return {
     xme: function(x) {
      return utils().xme(x || false);
     },
     isx: utils().xme('isxtraordinary'),
     users$: [],
     ignatz: 'ignaciouso'
   };
 };
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  // privatestate = {
  //   ignatz: 'xxx'
  // };
  state = null;

   // users$: Object;

  intialState = function() {
    // alert('initstate');
    // const xx = utils.xme();
    // this.privatestate = {
    //   // createdAt: Date.now(),
    //   state: utils,
    //   isx: utils().xme(),
    //   ignatz: 'ignaciouso'
    // };
  };


  constructor(private dbmanager: DbmanagerService) {
    try {
      this.state = xstate();
      // alert('x store');
      // this.intialState();
    } catch (error) {
      alert(error.toString());
    }
  }

  ngOnInit() {
    try {
      // let xusers = this.state().users$;
      this.dbmanager.cloudGet(false)
      .subscribe(xdata => {
        // xusers = xdata;
        // this.state().users$ = xdata;
        this.state = {
          ...this.state,
          users$: xdata,
          ignatz: 'twoish',
          fignaccio: 'newish'
        };
        // this.state.ignatz = 'hownowbrowncow';
         // this.users$ = xdata;
         this.state.users$[0].name = 'brown cow';
      });
      // const x = this.state().users;
      // alert(x.length);
    } catch (error) {
      alert(error.toString());
      // this.state().users = [error.toString()];
    }
  }

  // state() {
  //   // alert('xxx store');
  //   let rslt = this.privatestate;
  //   try {
  //     rslt = this.privatestate;
  //   } catch (error) {
  //     rslt = error.toString();
  //     alert('error store');
  //   }
  //   return rslt;
  // }

}
