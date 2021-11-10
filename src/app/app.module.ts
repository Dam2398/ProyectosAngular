import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { PianoComponent } from './components/piano/piano.component';
import { MenuComponent } from './components/menu/menu.component';
import { DadosComponent } from './components/dados/dados.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { InicioBIMComponent } from './components/inicio-bim/inicio-bim.component';
import { ResultadoIBMComponent } from './components/resultado-ibm/resultado-ibm.component';


@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    MenuComponent,
    DadosComponent,
    TareasComponent,
    ConvertidorComponent,
    InicioBIMComponent,
    ResultadoIBMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
