import { Component } from '@angular/core';
import { experience, job } from './experience';
@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent {
  experienceList: job[] = experience;
}
