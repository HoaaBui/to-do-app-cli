import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm: any;
  userId: Number = 0;

  constructor(private fb: FormBuilder, private Aroute: ActivatedRoute, private route: Router) {
    this.Aroute.params.subscribe(data => this.userId = Number(data["id"]));
  }

  ngOnInit(): void {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '');
    let selectedUser = users.filter(user => user.id === this.userId)[0];
    debugger;
    this.userForm = this.fb.group({
      name: [selectedUser.name,[Validators.required]],
      email: [selectedUser.email,[Validators.required]],
      gender: [selectedUser.gender,[Validators.required]],
      age: [selectedUser.age,[Validators.required]],
      id: [selectedUser.id]
    });
  }

  
  onSubmit() : void {
    var user = {...this.userForm.value},
    users = JSON.parse(localStorage.getItem('users') || '');
    
    for(let i = 0; i<users.length; i++){
      if(users[i].id === user.id){
        users[i] = user;
      }
    }

    localStorage.setItem('users', JSON.stringify(users));
    
    alert("Cập nhật user thành công");
  }

  onNavigate() : void {
    this.route.navigate(["user"]);
  }
}
