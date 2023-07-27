import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private unlockedPages: string[] = [];

  isPageUnlocked(page: string): boolean {
    return this.unlockedPages.includes(page);
  }

  unlockPage(page: string): void {
    if (!this.isPageUnlocked(page)) {
      this.unlockedPages.push(page);
    }
  }

  unlockSmallLock(page: string, lockNumber: number): void {
    const smallLock = `${page}_cadeado${lockNumber}`;
    if (!this.isPageUnlocked(smallLock)) {
      this.unlockedPages.push(smallLock);
    }
  }

  unlockBigLock(page: string): void {
    const bigLock = `${page}_grande`;
    if (!this.isPageUnlocked(bigLock)) {
      this.unlockedPages.push(bigLock);
    }
  }
}
