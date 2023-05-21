import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { ImgBannerService } from 'src/app/service/img-banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent {
  banner: banner = null;

  constructor(private activateRouter: ActivatedRoute, private bannerS: BannerService, private router: Router, public imagenBannerService: ImgBannerService) { }

  ngOnInit():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.bannerS.detail(id).subscribe(data =>{
      this.banner = data;
    }, err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.banner.imgB = this.imagenBannerService.url;
    this.bannerS.update(id, this.banner).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar ")
      this.router.navigate(['']);
    });
  }

  uploadImage($event:any ){
    const id = this.activateRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imagenBannerService.uploadImage($event, name);
  }

}
