import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ImagenProyectoService } from 'src/app/service/imagen-proyecto.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreP: string;
  descripcionP: string;
  urlP: string;
  imgP: string;
  proyecto: proyecto = null;

  constructor(private proyectoS: ProyectoService, private activateRouter: ActivatedRoute, private router: Router, public imagenProyectoService: ImagenProyectoService){ }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new proyecto(this.nombreP, this.descripcionP, this.urlP, this.imgP);
    this.proyectoS.save(proyectos).subscribe(data =>{
      alert("Proyecto Añadido");
      this.router.navigate(['']);
    }, error =>{
      alert("Error al guardar");
      this.router.navigate(['']);
    });
  }

  onUpdate():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imagenProyectoService.url;
    this.proyectoS.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la proyecto")
      this.router.navigate(['']);
    });
  }

  uploadImage($event:any ){
    const id = this.activateRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imagenProyectoService.uploadImage($event, name);
  }
  

}
