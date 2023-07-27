import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private unlockSequence: string[] = ['porta1', 'porta2', 'porta3', 'gato'];
  private unlockedPages: string[] = [];
  private smallLocks: boolean[] = [false, false, false];
  private bigLockOpen = false;

  isPageUnlocked(page: string): boolean {
    const pageIndex = this.unlockedPages.indexOf(page);
    return pageIndex !== -1;
  }

  unlockPage(page: string): void {
    this.unlockedPages.push(page);
  }

  isSmallLockOpen(lockNumber: number): boolean {
    return this.smallLocks[lockNumber - 1];
  }

  openSmallLock(lockNumber: number): void {
    if (this.isSmallLockOpen(lockNumber - 1)) {
      this.smallLocks[lockNumber - 1] = true;
    } else {
      this.smallLocks.fill(false, lockNumber - 1);
    }
  }

  get isBigLockOpen(): boolean {
    return this.bigLockOpen;
  }

  openBigLock(): void {
    if (this.smallLocks.every(lock => lock)) {
      this.bigLockOpen = true;
      this.unlockPage('porta1');
    }
  }
}
