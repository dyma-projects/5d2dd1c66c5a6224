import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  // Initialisation du compteur
  valeurCompteur: number = 0;
  @Input() public compteurEnfant: number;
  @Output() ModifierCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.valeurCompteur = this.compteurEnfant;
  }

  additionCompteur() {
    this.valeurCompteur ++;
    this.ModifierCompteur.emit({
      value: this.valeurCompteur
    });
  }

  soustractionCompteur() {
    this.valeurCompteur --;
    this.ModifierCompteur.emit({
      value: this.valeurCompteur
    });

  }

}
