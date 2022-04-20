import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public githubUserQuery!:any;
  public repoData!:any;

  constructor(private router: Router) {

   }

  ngOnInit(): void {}

  searchUser(){
    this.router.navigate(['landingPage'], {queryParams:{data:this.githubUserQuery}})
  }
}
