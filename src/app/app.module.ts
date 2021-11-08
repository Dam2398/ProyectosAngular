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


@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    MenuComponent,
    DadosComponent,
    TareasComponent
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
