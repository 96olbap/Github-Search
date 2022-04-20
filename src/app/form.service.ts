import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, foundRepos } from './form';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  username!: any;
  user!: any;
  link = "https://api.github.com/users/"


  constructor(private http: HttpClient) {
    this.user = new Form()
   }

  fetchUser(){
    let newUser = new Promise((resolve,reject) => {
    this.http.get<any>(this.link + this.username + "?access_token'=" + environment.apiToken).toPromise().then(
      response => {
        this.user.image = response.avatar_url
        this.user.username = response.name
        this.user.bio = response.bio
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.location = response.location
        this.user.twitter = response.twitter_username
        resolve(console.log(this.user))
      }, error =>{
        reject(console.log("User cant be fetched")) 
      }
    )
  })
  return newUser;
  }

  //To fetch the repositories
  userRepos: any[] = [];
  jango!: any;
  repoInfo = new foundRepos;
  
  fetchRepos(){
    let newRepos = new Promise((resolve, reject)=>{
      this.http.get<any>(this.link + this.username + '/repos').toPromise().then(
        response =>{
          response.forEach((response:any) =>{
            this.repoInfo = new foundRepos();
            this.jango.name = response.name;
            this.jango.full_name = response.full_name;
            this.jango.description = response.description;
            this.jango.created_at = response.created_at;
            this.jango.html_url = response.html_url;
            this.userRepos.push(this.jango);
            resolve(console.log('Repositories info can be fetched'));
          });
        },error =>{
          reject(console.log("Repositories info can't be found"));
        }
      )
    })
    return newRepos;
  }
}
