import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-ayuntamiento',
  templateUrl: './ayuntamiento.page.html',
  styleUrls: ['./ayuntamiento.page.scss'],
})
export class AyuntamientoPage implements OnInit {

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
