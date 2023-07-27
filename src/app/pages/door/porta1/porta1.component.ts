import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-porta1',
  templateUrl: './porta1.component.html',
  styleUrls: ['./porta1.component.css']
})
export class Porta1Component {
  private cadeadosPequenosAbertos = [false, false, false];
  private cadeadoGrandeAberto = false;

  constructor(private gameService: GameService) {}

  isCadeadoPequenoOpen(index: number): boolean {
    return this.cadeadosPequenosAbertos[index];
  }

  isCadeadoGrandeOpen(): boolean {
    return this.cadeadoGrandeAberto;
  }

  openCadeadoPequeno(index: number): void {
    this.cadeadosPequenosAbertos[index] = true;
    this.checkIfPorta1IsUnlocked();
  }

  openCadeadoGrande(): void {
    if (this.areAllCadeadosPequenosOpen()) {
      this.cadeadoGrandeAberto = true;
      this.checkIfPorta1IsUnlocked();
    }
  }

  private areAllCadeadosPequenosOpen(): boolean {
    return this.cadeadosPequenosAbertos.every(open => open);
  }

  private checkIfPorta1IsUnlocked(): void {
    if (this.isCadeadoGrandeOpen()) {
      this.gameService.unlockPage('porta1');
    } else {
      this.gameService.lockPage('porta1');
    }
  }
}
