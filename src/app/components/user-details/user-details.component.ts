import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!:User;

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.fetchUserInfo()
    this.user = this.userservice.user
  }

}
