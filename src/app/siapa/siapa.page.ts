import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { VariablesService } from '../servicios/variables.service';


declare var google: any;
@Component({
  selector: 'app-siapa',
  templateUrl: './siapa.page.html',
  styleUrls: ['./siapa.page.scss'],
})
export class SiapaPage implements OnInit {

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;

  constructor(public http:HttpClient, public toastController:ToastController,public variable:VariablesService) { }
  public  problema:string;
  public  imagen:any;

  subir(){
    let formData = new FormData();   
       formData.append('imagen', this.imagen);
       formData.append("problema", this.problema);

    this.http.post(this.variable.url+"/api/enviar", formData).subscribe(data=>{
      console.log(data)
      this.presentToast("Gracias por su opinion")
    },error=>{
      this.presentToast("Ha ocurrido un error, vuelva a intentarlo mas tarde")
    });
  }
  
  recargar(){
    window.location.reload();
  }

  ngOnInit(){
    this.initMap();
  }
  
  showMap(){
    

    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options ={
      center: location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  }

  

initMap(): void {
 new google.maps.Map(document.getElementById("map") as HTMLElement, {
  center: { lat: 21.499916, lng: -104.887724 },
  zoom: 13,
});
}

async presentToast(dato:string) {
  const toast = await this.toastController.create({
    message: dato,
    duration: 2000
  });
  toast.present();
}

}
