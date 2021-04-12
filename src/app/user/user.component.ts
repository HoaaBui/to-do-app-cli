import { Component, OnInit } from '@angular/core';
import { User } from '../model/userModel';
import { UserInfo } from '../service/userService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: User[] = UserInfo;
  users: User[] = [];
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(this.userInfo));

    if(localStorage.getItem('users')){
      this.users = JSON.parse(localStorage.getItem('users') || '');
    }
  }

}
