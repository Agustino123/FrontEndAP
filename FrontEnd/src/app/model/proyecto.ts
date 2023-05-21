export class proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    urlP: string
    imgP: string;

    constructor(nombreP: string,descripcionP: string , urlP: string, imgP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.urlP = urlP;
        this.imgP = imgP;
    }
}
