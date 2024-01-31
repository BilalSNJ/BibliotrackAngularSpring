import { Component, Input } from '@angular/core';
import { AccueilButton } from 'src/app/interface/AccueilButton';

@Component({
  selector: 'app-accueil-buttons',
  templateUrl: './accueil-buttons.component.html',
  styleUrls: ['./accueil-buttons.component.css'],
})
export class AccueilButtonsComponent {
  @Input() accueilButton: AccueilButton = {
    title: '',
    route: '',
    imagePath: '',
  };
}
