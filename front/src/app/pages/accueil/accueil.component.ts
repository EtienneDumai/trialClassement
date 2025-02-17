import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
