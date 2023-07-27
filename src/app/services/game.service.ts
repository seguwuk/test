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

  unlockPage(page: string): void {
    const pageIndex = this.unlockSequence.indexOf(page);
    if (pageIndex !== -1) {
      const previousPages = this.unlockSequence.slice(0, pageIndex);
      if (previousPages.every(page => this.unlockedPages.includes(page))) {
        this.unlockedPages.push(page);
      }
    }
  }

  lockPage(page: string): void {
    this.unlockedPages = this.unlockedPages.filter(p => p !== page);
  }
}
