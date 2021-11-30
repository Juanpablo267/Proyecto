import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


declare var google: any;
@Component({
  selector: 'app-siapa',
  templateUrl: './siapa.page.html',
  styleUrls: ['./siapa.page.scss'],
})
export class SiapaPage implements OnInit {

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  map: any;

  constructor(public http:HttpClient) { }
  public  problema:string;
  public  imagen:any;

  subir(){
    let formData = new FormData();   
       formData.append('imagen', this.imagen);
       formData.append("problema", this.problema);

    this.http.post("http://3f0f-189-177-200-20.ngrok.io/api/enviar", formData).subscribe(data=>{
      console.log(data)
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

}
