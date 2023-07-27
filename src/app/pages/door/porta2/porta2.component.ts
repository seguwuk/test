import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-porta2',
  templateUrl: './porta2.component.html',
  styleUrls: ['./porta2.component.css']
})
export class Porta2Component implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}

  unlockLock(lockNumber: number): void {
    this.gameService.unlockSmallLock('porta2', lockNumber);
  }

  isLockUnlocked(lockNumber: number): boolean {
    return this.gameService.isSmallLockUnlocked('porta2', lockNumber);
  }

  unlockBigLock(): void {
    this.gameService.unlockBigLock('porta2');
  }

  isBigLockUnlocked(): boolean {
    return this.gameService.isBigLockUnlocked('porta2');
  }
}
