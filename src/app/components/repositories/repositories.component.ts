import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/repo';
import { RepoService } from 'src/app/repo.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos!:Repo[];
  @Input() getSearchName!:string;


  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repoService.fetchRepoInfo(this.getSearchName)
    this.repos = this.repoService.repos
  }

}
