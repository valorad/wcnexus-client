import { Component, Input, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';
import { ITechListProps } from 'src/app/models/interfaces/techs.interface';

@Component({
  selector: 'home-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  @Input() TechListProps! : Partial<ITechListProps>

  coverStyles = {
    width: "4em",
    height: "4em",
  };

  techToInstance = (tech: INexus): IInstanceCardProps => ({
    name: tech.name,
    image: tech.logo,
    styles: {
      image: this.coverStyles,
      title: {
        display: "none"
      }
    },
  });

  constructor() { }

  ngOnInit(): void {

  }

}
