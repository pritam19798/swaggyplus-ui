import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy-search',
  templateUrl: './dummy-search.component.html',
  styleUrls: ['./dummy-search.component.css']
})
export class DummySearchComponent implements OnInit {

  SearchKey:String
  constructor(
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.SearchKey=this.route.snapshot.params['searchKey']
    this.router.navigate(['search',this.SearchKey])

  }

}
