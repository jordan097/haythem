import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){

  }
  name="gasama";
  password:string="1212121";
  isDisabled:boolean=true
  buttonColor:string="red"
  affiche():void{
    const msg="hello";
    console.log(msg);
  }
  ngOnInit(){
    
  }
  
}
