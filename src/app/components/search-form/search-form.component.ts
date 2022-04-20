import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public githubUserQuery!:any;
  public repoData!:any;

  constructor() {

   }

  ngOnInit(): void {
  }
  searchUser(){

  }

}
