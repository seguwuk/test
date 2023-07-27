import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private unlockSequence: string[] = ['porta1', 'porta2', 'porta3', 'gato'];
  private unlockedPages: string[] = [];

  constructor() {}

  isPageUnlocked(page: string): boolean {
    const pageIndex = this.unlockedPages.indexOf(page);
    return pageIndex !== -1;
  }

  unlockSmallLock(page: string, lockNumber: number): void {
    if (lockNumber === 1) {
      this.unlockPage('porta1');
    } else if (lockNumber === 2 && this.isSmallLockUnlocked('porta1', 1)) {
      this.unlockPage('porta1');
    } else if (lockNumber === 3 && this.isSmallLockUnlocked('porta1', 2)) {
      this.unlockPage('porta1');
    }
  }

  isSmallLockUnlocked(page: string, lockNumber: number): boolean {
    if (page !== 'porta1' || lockNumber < 1 || lockNumber > 3) {
      return false;
    }

    const index = this.unlockedPages.indexOf(`porta1_small${lockNumber}`);
    return index !== -1;
  }

  isBigLockUnlocked(page: string): boolean {
    if (page !== 'porta1') {
      return false;
    }

    const index = this.unlockedPages.indexOf('porta1_big');
    return index !== -1;
  }

  private unlockPage(page: string): void {
    if (!this.isPageUnlocked(page)) {
      this.unlockedPages.push(page);
    }
  }
}
