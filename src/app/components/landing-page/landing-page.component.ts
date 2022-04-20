import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchName:any;

  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.searchName = params.data;
    })
  }

}
