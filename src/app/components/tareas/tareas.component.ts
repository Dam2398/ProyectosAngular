import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //console.log(this.nombreTarea)
    //Crear un objeto tarea
    const tarea:Tarea={
      nombre:this.nombreTarea,
      estado: false
    };

    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //Reset form
    this.nombreTarea='';
  }

  eliminarTarea(index:number){
    //console.log(index)
    this.listTareas.splice(index,1);//desde donde quieres eliminar y cunatos numeros quieres eliminar

  }

  actualizarTarea(tarea:Tarea, index:number){
    //this.listTareas[index].estado = !tarea.estado
    tarea.estado =!tarea.estado
  }

}
