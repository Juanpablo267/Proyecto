import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siapa',
  templateUrl: './siapa.page.html',
  styleUrls: ['./siapa.page.scss'],
})
export class SiapaPage implements OnInit {

  constructor(public http:HttpClient) { }
  public  problema:string;
  public  imagen:any;

  subir(){
    let formData = new FormData();   
       formData.append('imagen', this.imagen);
       formData.append("problema", this.problema);

    this.http.post("http://appresol.test/api/enviar", formData).subscribe(data=>{
      console.log(data)
    });
  }
  ngOnInit() {
  }

}
