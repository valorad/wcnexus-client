import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";

import { HomeViewComponent } from './views/home.view.component';
import { SlideCoverComponent } from './components/slide-cover/slide-cover.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { ProjectCaseComponent } from './components/project-case/project-case.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { GameWallComponent } from './components/game-wall/game-wall.component';
import { XMJListComponent } from './components/xmj-list/xmj-list.component';


@NgModule({
  declarations: [
    HomeViewComponent,
    SlideCoverComponent,
    WelcomeComponent,
    AboutMeComponent,
    AboutSiteComponent,
    ProjectCaseComponent,
    ThankYouComponent,
    GameWallComponent,
    XMJListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,    
  ]
})
export class HomeModule { }
