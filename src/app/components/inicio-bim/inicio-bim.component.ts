import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-bim',
  templateUrl: './inicio-bim.component.html',
  styleUrls: ['./inicio-bim.component.css']
})
export class InicioBIMComponent implements OnInit {

  edad=25;
  peso = 60;
  altura=170;
  genero='male'


  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura(event:any){

    this.altura =event.target.value
  }

  male(){
    this.genero='male';
  }
  famale(){
    this.genero='famale'
  }

}
