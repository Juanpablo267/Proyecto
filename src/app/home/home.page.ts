import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http:HttpClient	) {}
  ngOnInit() {  
    this.http.post("https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages/send",{}).subscribe(data=>{
console.log(data)
    })
   }
}
