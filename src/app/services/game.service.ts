import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private unlockSequence: string[] = ['porta1', 'porta2', 'porta3', 'gato'];

  private unlockedPages: string[] = [];

  constructor() {}

  isPageUnlocked(page: string): boolean {
    return this.unlockedPages.includes(page);
  }

  unlockPage(page: string): boolean {
    if (!this.unlockedPages.includes(page)) {
      if (this.isNextPage(page)) {
        this.unlockedPages.push(page);
        return true;
      }
    }
    return false;
  }

  private isNextPage(page: string): boolean {
    const currentPageIndex = this.unlockedPages.length;
    return this.unlockSequence[currentPageIndex] === page;
  }
}
