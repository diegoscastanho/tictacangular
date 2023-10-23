import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    player1Name: string = '';
    player2Name: string = '';

    constructor(private router: Router) {}

    startGame() {
      // Navigate to the board page and pass player names as route parameters
      this.router.navigate(['/board'], {
        queryParams: {
          player1: this.player1Name,
          player2: this.player2Name
        }
      });
    }
}
