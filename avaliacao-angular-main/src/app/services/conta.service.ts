import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContaService {

  private saldo: number = 0;

  constructor() { }

  getSaldo() {
    return this.saldo
  }

  depositarValor(valor: number) {
    this.saldo += valor
    return this.saldo
  }

  sacarValor(valor: number) {
    if(valor <= this.saldo) {
      this.saldo -= valor;
    }
    return this.saldo
  }
}
