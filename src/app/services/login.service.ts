import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {UserData} from "../interfaces/user-data.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!: UserData

  constructor(private authService: SocialAuthService,
              private router: Router) {
    this.authService.authState.subscribe((user: SocialUser) => {
      if (user) {
        console.log('User data: ', user);
        localStorage.setItem("token", user.authToken)
        localStorage.setItem("user", JSON.stringify(user))
        // Handle your authentication & routing logic here.
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout(): void {
    this.authService.signOut().then(() => {
      // Clear the token or session information
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
}
