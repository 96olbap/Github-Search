import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repo!:Repo;
  repos:any[] = [];
  url = 'https://api.github.com/users/';

  constructor(private http:HttpClient) { 
  }
  fetchRepoInfo(searchName:any){
    console.log(searchName);
    let promise = new Promise((resolve,reject) => {
      this.http.get<any>(this.url + searchName + "/repos" + "?access_token'=" + environment.apiToken).toPromise().then(
        response => {
          response!.forEach((response:any) => {
            this.repo = new Repo(
              response.name,
              response.description,
              response.created_at,
              response.html_url
            )
            this.repos.push(this.repo)
          });
          resolve(response)
          
        }, error =>{
         reject(error) 
        }
      )
    })
    return promise;
  }
}
