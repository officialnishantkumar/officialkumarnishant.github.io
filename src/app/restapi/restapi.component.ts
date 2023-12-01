import { Component } from '@angular/core';
import { IUser } from '../../IUser';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrl: './restapi.component.css'
})
export class RestapiComponent {
  users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}
