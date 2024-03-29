import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.iniciar()
  }

  handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    localStorage.setItem("token",response);
    var xd:Router
    window.location.href=""
  }

  iniciar() {
    google.accounts.id.disableAutoSelect();
    google.accounts.id.initialize({
      client_id: "182138132492-dmu49mksuv6957a68mg2lu0kt40k66kr.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
      
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
    
  }

  salir(){
    console.log("cerrando")
    google.accounts.id.disableAutoSelect();
    window.location.reload()
  }
}
