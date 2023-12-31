import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    player1Name: string;
    player2Name: string;
    singlePlayerMode: boolean;
    multiPlayerMode: boolean;

    constructor(private router: Router) {
      this.player1Name = "";
      this.player2Name = "";
      this.singlePlayerMode = true;
      this.multiPlayerMode = false;
    }

    selectSinglePlayerMode(){
      this.singlePlayerMode = true
      this.multiPlayerMode = false
    }

    selectMultiplayerMode(){
      this.singlePlayerMode = false
      this.multiPlayerMode = true
    }

    startGameSinglePlayer() {
      // Navigate to the board page and pass player names as route parameters
      this.router.navigate(['/singleboard'], {
        queryParams: {
          player1: this.player1Name,
        }
      });
    }

    startGameMultiPlayer() {
      // Navigate to the board page and pass player names as route parameters
      this.router.navigate(['/board'], {
        queryParams: {
          player1: this.player1Name,
          player2: this.player2Name
        }
      });
    }
}
