import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  dadoIzq = 'assets/imgDados/dice1.png';
  dadoDer = 'assets/imgDados/dice4.png';

  numero1 = 1;
  numero2 = 4;

  tirarDados(){
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;
    
    console.log(this.numero1, this.numero2)

    this.dadoIzq = `assets/imgDados/dice${this.numero1}.png`;
    this.dadoDer = `assets/imgDados/dice${this.numero2}.png`;
  
  }


}
