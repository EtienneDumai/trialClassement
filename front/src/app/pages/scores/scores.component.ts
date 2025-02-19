import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css'
})
export class ScoresComponent {
  constructor() {}
}
