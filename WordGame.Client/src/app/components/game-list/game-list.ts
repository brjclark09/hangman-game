import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GameplayService, GameDto } from '../../services/gameplay-service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.html'
})
export class GameList implements OnInit {
  games = signal<GameDto[]>([]);

  constructor(private gameplayService: GameplayService, private router: Router) {}

  ngOnInit(): void {
    this.gameplayService.getAllGames().subscribe(games => this.games.set(games));
  }

  newGame(): void {
    this.gameplayService.createGame().subscribe(game => {
      this.games.update(games => [...games, game]);
    });
  }

  playGame(gameId: number): void {
    this.router.navigate(['/wordgame', gameId]);
  }

  deleteGame(gameId: number, event: MouseEvent): void {
    event.stopPropagation();
    this.gameplayService.deleteGame(gameId).subscribe(remaining => this.games.set(remaining));
  }

  spaced(str: string): string {
    return str.split('').join(' ');
  }
}
