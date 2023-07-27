import { Component } from '@angular/core';
import { GameService } from '../../../services/game.service';

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

  isSmallLockUnlocked(lockNumber: number): boolean {
    return this.gameService.isSmallLockUnlocked('porta1', lockNumber);
  }

  isBigLockUnlocked(): boolean {
    return this.gameService.isBigLockUnlocked('porta1');
  }
}
