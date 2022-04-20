import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!:User;
  url = 'https://api.github.com/users/';

 constructor(public http: HttpClient) { 
    this.user = new User("","","", 0, 0,"","")

  }
  fetchUserInfo(searchName:any){

    let promise = new Promise((resolve,reject) => {
      this.http.get<any>(this.url + searchName + "?access_token'=" + environment.apiToken).toPromise().then(
        response => {
          this.user.image = response.avatar_url
          this.user.username = response.name
          this.user.bio = response.bio
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.location = response.location
          this.user.twitter = response.twitter_username
          resolve(response)
        }, error =>{
         reject(error) 
        }
      )
    })
    return promise;
  }
}
