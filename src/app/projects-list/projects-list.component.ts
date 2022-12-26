import { Component } from '@angular/core'
import { projects, Project } from './projectsData'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  projectList: Project[] = projects

  navigate(p: Project) {
    window.open(p.link, "_blank")
  }
}
