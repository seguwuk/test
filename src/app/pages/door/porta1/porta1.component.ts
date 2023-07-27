import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-porta1',
  templateUrl: './porta1.component.html',
  styleUrls: ['./porta1.component.css']
})
export class Porta1Component {
  constructor(private gameService: GameService) {}

  openSmallLock(lockNumber: number) {
    this.gameService.unlockSmallLock('porta1', lockNumber);
  }

  isSmallLockOpen(lockNumber: number): boolean {
    return this.gameService.isSmallLockUnlocked('porta1', lockNumber);
  }

  isBigLockOpen(): boolean {
    return this.gameService.isBigLockUnlocked('porta1');
  }
}
