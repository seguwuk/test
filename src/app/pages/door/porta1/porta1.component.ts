import { Component } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-porta1',
  templateUrl: './porta1.component.html',
  styleUrls: ['./porta1.component.css']
})
export class Porta1Component {
  constructor(private gameService: GameService) {}

  isSmallLockUnlocked(lockNumber: number): boolean {
    return this.gameService.isPageUnlocked(`porta1_cadeado${lockNumber}`);
  }

  isBigLockUnlocked(): boolean {
    return this.gameService.isPageUnlocked('porta1_grande');
  }

  unlockSmallLock(lockNumber: number): void {
    const lockName = `porta1_cadeado${lockNumber}`;
    if (!this.isSmallLockUnlocked(lockNumber)) {
      this.gameService.unlockPage(lockName);
    }
  }

  unlockBigLock(): void {
    if (this.isSmallLockUnlocked(1) && this.isSmallLockUnlocked(2) && this.isSmallLockUnlocked(3)) {
      this.gameService.unlockBigLock('porta1');
    }
  }
}
