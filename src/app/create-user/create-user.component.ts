import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: any;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      age: ['',[Validators.required]],
    });
  }

  onSubmit() : void {
    var user = {...this.userForm.value},
    users = JSON.parse(localStorage.getItem('users') || '');
    
    user.id = users.length + 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    this.userForm.reset();
    alert("Tạo user thành công");
  }

  onNavigate() : void {
    this.route.navigate(["user"]);
  }
}
