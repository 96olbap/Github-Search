import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos!:Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
