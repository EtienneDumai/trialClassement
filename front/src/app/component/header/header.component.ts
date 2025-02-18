import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // Assurez-vous que le composant est standalone
  imports: [RouterModule], // 👈 Ajout de RouterModule pour activer routerLink
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
