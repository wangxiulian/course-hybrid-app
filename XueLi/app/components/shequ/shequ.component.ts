import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient,private route:Router) { }
  communities;
  ngOnInit() {
    this.http.get('/api/communities').subscribe(data=>{
      this.communities = data;
    })
  }

}

class Community{
  constructor(
      public id:number,
      public headpic:string,
      public images:string,
      public articleName:string,
      public article:string,
      public Name:string,
      public data:string,
      public reading:number,
      public common:number
  ){}
}
