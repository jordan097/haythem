import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  question:string="q1";
  reponse:string="typescript";
  condition:boolean=true;
  cndt:boolean=true;
  msg='bonjour'
  tab:any=[{nom:"azer",prenom:"samer",work:"zazzar"} ,{nom:"haythem",prenom:"ghabara",work:"5adhar"},{nom:"ahmed",prenom:"saleh",work:"hamas"},{nom:"ahmed",prenom:"saleh",work:"haded"}]
  nom='haythem'
  islarge=false;
  isdark=false;
  tache=false
  getcolor(){
    if(this.islarge){
      return 'red';
  }else return "blue";
}
  correction(reponseET:string){
    this.msg=reponseET;
  }



}
