import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {

  @Input() questions:string=''
  reponse:string='';
  @Output() resfin = new EventEmitter<string>
  envoyer(){
    this.resfin.emit(this.reponse);
  }


}
