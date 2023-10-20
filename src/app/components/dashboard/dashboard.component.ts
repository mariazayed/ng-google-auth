import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private loginService: LoginService) {
  }

  logout() {
    this.loginService.logout()
  }
}
