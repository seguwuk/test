import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private unlockSequence: string[] = ['porta1', 'porta2', 'porta3', 'gato'];
  private unlockedPages: string[] = [];
  private unlockedSmallLocks: { [page: string]: number[] } = {};
  private unlockedBigLocks: { [page: string]: boolean } = {};

  constructor() {}

  unlockPage(page: string): void {
    if (this.isPageUnlocked(page)) return;
    const expectedPage = this.unlockSequence[this.unlockedPages.length];
    if (page === expectedPage) {
      this.unlockedPages.push(page);
    } else {
      this.resetProgress();
    }
  }

  unlockSmallLock(page: string, lockNumber: number): void {
    // Verificar se a página já foi desbloqueada
    if (!this.unlockedSmallLocks[page]) {
      this.unlockedSmallLocks[page] = [];
    }

    if (this.unlockedSmallLocks[page].includes(lockNumber)) {
      // Se o cadeado já estiver desbloqueado, não fazer nada
      return;
    }

    // Verificar se o cadeado é o próximo a ser desbloqueado
    const expectedLockNumber = this.unlockedSmallLocks[page].length + 1;
    if (lockNumber === expectedLockNumber) {
      this.unlockedSmallLocks[page].push(lockNumber);

      // Verificar se todos os cadeados pequenos da página foram desbloqueados
      const totalSmallLocks = 3; // Total de cadeados pequenos por página
      if (this.unlockedSmallLocks[page].length === totalSmallLocks) {
        this.unlockBigLock(page);
      }
    } else {
      // Se o cadeado não é o próximo a ser desbloqueado, reiniciar o progresso
      this.resetProgress();
    }
  }

  unlockBigLock(page: string): void {
    if (!this.unlockedPages.includes(page)) {
      // Se a página não foi desbloqueada, reiniciar o progresso
      this.resetProgress();
      return;
    }

    if (this.unlockedBigLocks[page]) {
      // Se o cadeado grande já estiver desbloqueado, não fazer nada
      return;
    }

    this.unlockedBigLocks[page] = true;

    if (Object.keys(this.unlockedBigLocks).length === this.unlockSequence.length) {
      // Se todos os cadeados grandes foram desbloqueados, desbloquear a última página (gato)
      this.unlockPage('gato');
    }
  }

  constructor() {}

  isPageUnlocked(page: string): boolean {
    const pageIndex = this.unlockedPages.indexOf(page);
    return pageIndex !== -1;
  }

<<<<<<< HEAD
  isSmallLockUnlocked(page: string, lockNumber: number): boolean {
    return this.unlockedSmallLocks[page]?.includes(lockNumber);
  }

  isBigLockUnlocked(page: string): boolean {
    return this.unlockedBigLocks[page] || false;
  }

  private resetProgress(): void {
    this.unlockedPages = [];
    this.unlockedSmallLocks = {};
    this.unlockedBigLocks = {};
  }
=======
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
>>>>>>> parent of 3e671b2 (cadeado verde)
}
