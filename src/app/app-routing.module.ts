import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PianoComponent } from "./components/piano/piano.component";
import { DadosComponent } from "./components/dados/dados.component";
import { TareasComponent } from "./components/tareas/tareas.component";
import { MenuComponent } from "./components/menu/menu.component";
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [

  {path:'', component:PianoComponent},
  {path:'dados', component:DadosComponent},
  {path: 'tareas', component:TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
