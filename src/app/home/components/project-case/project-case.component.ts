import { Component, Input, OnInit } from '@angular/core';
import { IProjectCaseProps } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'section [ProjectCaseComponent]',
  templateUrl: './project-case.component.html',
  styleUrls: ['./project-case.component.scss']
})
export class ProjectCaseComponent implements OnInit {

  @Input() ProjectCaseProps! : Partial<IProjectCaseProps>

  constructor() { }

  ngOnInit(): void {
  }

}
