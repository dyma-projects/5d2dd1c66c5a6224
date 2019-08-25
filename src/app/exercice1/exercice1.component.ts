import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  // Initialisation du compteur et du resultat
  public compteurParent: number;
  public resultat: number;

  constructor() { }

  ngOnInit() {
    this.compteurParent = 99;
    this.resultat = null;
  }

  // A chaque mise à jour reçue du Component Enfant
  miseAJourCompteur(event: any) {
    this.resultat = event.value;
  }


}
