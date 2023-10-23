import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-singleplayerboard',
  templateUrl: './singleplayerboard.component.html',
  styleUrls: ['./singleplayerboard.component.scss']
})
export class SingleplayerboardComponent {

  squares: any[];
  xIsNext: boolean;
  winner: string | null;
  player1Name: string | null;
  player2Name: string | null;

  constructor(private route: ActivatedRoute) {
    this.squares = [];
    this.xIsNext = true;
    this.winner = null;
    this.player1Name = "";
    this.player2Name = "Robot";
  }

  ngOnInit() {
      this.route.queryParamMap.subscribe((params) => {
        this.player1Name = params.get('player1');
      });

    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true; // Player 1 (human) goes first
  }

  get player() {
    return this.xIsNext ? this.player1Name : this.player2Name;
  }

  get player_simbol() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.squares.splice(idx, 1, this.player_simbol);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();

      // If it's still the player's turn, let the computer make a move
      if (!this.winner && !this.xIsNext) {
        this.computerMove();
      }
    }
  }

  computerMove() {
    // Implement your simple AI logic here.

    delay(500)
    const emptySquares = this.squares
      .map((value, index) => (value === null ? index : -1))
      .filter((index) => index !== -1);

    // Check if there are empty squares
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      this.makeMove(emptySquares[randomIndex]);
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        if(this.squares[a] === 'O') return this.player2Name
        else if(this.squares[a] === 'X') return this.player1Name
      }
    }
    return this.squares.every((square) => square !== null) ? 'draw' : null;
  }
}

