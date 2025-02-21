import { Component, OnInit, Inject } from '@angular/core';
import { ClassementService } from '../../service/score/score.service';
import { Classement } from '../../models/score.model';
import { HeaderComponent } from '../../component/header/header.component';
import { CommonModule } from '@angular/common'; // ✅ Import nécessaire
@Component({
  selector: 'app-classement',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})

export class ScoresComponent implements OnInit {

  classements: any[] = [];

  selectedClassement: any;



  constructor(private classementService: ClassementService) { }



  ngOnInit(): void {

    this.getClassements();

  }



  getClassements(): void {

    this.classementService.getClassements()

      .subscribe(classements => this.classements = classements);

  }



  selectClassement(id: string): void {

    this.selectedClassement = this.classements.find(cl => cl._id === id);

  }

}

