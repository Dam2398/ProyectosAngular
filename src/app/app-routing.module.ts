import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PianoComponent } from "./components/piano/piano.component";
import { DadosComponent } from "./components/dados/dados.component";
import { TareasComponent } from "./components/tareas/tareas.component";
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { InicioBIMComponent } from './components/inicio-bim/inicio-bim.component';

const routes: Routes = [

  {path:'', component:PianoComponent},
  {path:'dados', component:DadosComponent},
  {path: 'tareas', component:TareasComponent},
  {path: 'convertidor', component:ConvertidorComponent},
  {path: 'bmi', component:InicioBIMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
