import { Component, OnInit } from '@angular/core';
import { User } from '../model/userModel';
import { UserInfo } from '../service/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: User[] = UserInfo;
  users: User[] = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.userInfo));
    }
    
    if(localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users') || '');
    }
  }

  onDeleteUser(id:Number) {
    this.users = this.users.filter(user=> user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
    
    alert("Xóa user thành công");
  }

  onNavigate(id: Number){
    this.router.navigate(["user/update-user",id]);
  }
}
