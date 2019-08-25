import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  // Récupération du contenu de la référence
  @ViewChild('data', {static: false}) public el: ElementRef;
  
  public valeur: string;

  constructor() { }

  ngOnInit() {
    this.valeur = null;
  }

  addText() {
    // Affectation de la référence via le nativeElement
    //  et transmission au template via la variable 'valeur'
    this.valeur = this.el.nativeElement.value;
  }

  



}
