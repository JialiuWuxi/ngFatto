import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-corner-info',
  templateUrl: './corner-info.component.html',
  styleUrls: ['./corner-info.component.css']
})
export class CornerInfoComponent implements OnInit {

  private userName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.userName = this.userService.getName();
  }

}
