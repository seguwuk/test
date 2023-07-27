import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-porta1',
  templateUrl: './porta1.component.html',
  styleUrls: ['./porta1.component.css']
})
export class Porta1Component implements OnInit {
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  isSmallLockOpen(lockNumber: number): boolean {
    return this.gameService.isPageUnlocked(`porta1_lock${lockNumber}`);
  }

  openSmallLock(lockNumber: number): void {
    if (!this.isSmallLockOpen(lockNumber)) {
      this.gameService.unlockPage(`porta1_lock${lockNumber}`);
    }
  }

  get isBigLockOpen(): boolean {
    return this.gameService.isPageUnlocked('porta1');
  }
}
