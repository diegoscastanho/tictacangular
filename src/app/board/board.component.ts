import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent{
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
    this.player2Name = "";
  }

  ngOnInit() {
      this.route.queryParamMap.subscribe((params) => {
        this.player1Name = params.get('player1');
        this.player2Name = params.get('player2');
      });

    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = false;
  }

  get player() {
    return this.xIsNext ? this.player2Name : this.player1Name;
  }

  get player_simbol() {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.squares.splice(idx, 1, this.player_simbol);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
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
