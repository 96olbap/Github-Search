import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public githubUserQuery!:any;
  public repoData!:any;

  constructor(private formService: FormService) {

   }

  ngOnInit(): void {
    this.formService.username = this.githubUserQuery;
    this.formService.fetchUser();
    this.repoData = this.formService.user;
  }
  searchUser(){
    this.formService.username = this.githubUserQuery;
    this.formService.fetchUser
  }

}
