import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  valor: number = 5;
  saldoAtual: number = 0;

  constructor(private service: ContaService){
    this.saldoAtual = service.getSaldo();
  }

  //este método deve aumentar o saldo atual em um valor X
  depositar() {
    this.saldoAtual = this.service.depositarValor(this.valor);
  }

  //este método deve diminuir o saldo atual em um valor X
  sacar() {
    this.saldoAtual = this.service.sacarValor(this.valor);
  }

}
