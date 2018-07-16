import { Component, OnInit } from '@angular/core';
import { DbmanagerService } from '../dbmanager.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(
    private route: ActivatedRoute,
    private dbmanager: DbmanagerService
  ) {
    this.route.params.subscribe(
      params => {
        this.user$ = params.id;
      }
    );
  }

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/users/' + this.user$;
    this.dbmanager.cloudGet(url).subscribe(
      data => {
        this.user$ = data;
      }
    );
  }

}
