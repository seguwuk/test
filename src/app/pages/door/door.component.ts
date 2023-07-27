import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent {
  constructor(private gameService: GameService) {}

  isPageUnlocked(page: string): boolean {
    return this.gameService.isPageUnlocked(page);
  }
}
