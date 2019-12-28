import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-franchiseeusers',
  templateUrl: './franchiseeusers.component.html',
  styleUrls: ['./franchiseeusers.component.scss']
})
export class FranchiseeusersComponent implements OnInit {
  userValue: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.userValue = x);
  }

  loginOn() {
    console.log('Select');
  }

  ngOnInit() {
  }

}
