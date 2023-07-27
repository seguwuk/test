import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  constructor(private gameService: GameService) {}

  isPageUnlocked(page: string): boolean {
    return this.gameService.isPageUnlocked(page);
  }
}
