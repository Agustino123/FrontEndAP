import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ImagenProyectoService } from 'src/app/service/imagen-proyecto.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {
  proyecto: proyecto = null;

  constructor(private activateRouter: ActivatedRoute, private proyectoS: ProyectoService, private router: Router, public imagenProyectoService: ImagenProyectoService) { }

  ngOnInit():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data =>{
      this.proyecto = data;
    }, err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imagenProyectoService.url;
    this.proyectoS.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar ")
      this.router.navigate(['']);
    });
  }

  uploadImage($event:any ){
    const id = this.activateRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imagenProyectoService.uploadImage($event, name);
  }

}
