import { Component, OnInit } from '@angular/core';
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { NexusService } from 'src/app/services/nexus.service';
import textGopibutong from 'src/statics/data/Misc/text-gopibutong';
import textMarkdown from 'src/statics/data/Misc/text-markdown';
import { IAboutMeProps } from 'src/app/models/interfaces/about-me.interface';
import { IThankYouProps } from 'src/app/models/interfaces/thank-you.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';
import { IWelcomeProps } from 'src/app/models/interfaces/welcome.interface';
import { IProjectCaseProps } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss']
})
export class HomeViewComponent implements OnInit {

  socialMedia: INexus[] = [
    {
      dbname: "nexus-weibo",
      name: "My Weibo",
      description: "My Weibo",
      url: "https://weibo.com/wcxaaa",
      avatar: "github-avatar.jpg",
      type: "type-social",
      cover: "",
      photos: []
    },
    {
      dbname: "nexus-zhihu",
      name: "My Zhihu",
      description: "My Zhihu",
      url: "https://www.zhihu.com/people/valorad",
      avatar: "github-avatar.jpg",
      type: "type-social",
      cover: "",
      photos: [],
    },
    {
      dbname: "nexus-twitter",
      name: "My Twitter",
      description: "My Twitter",
      url: "https://twitter.com/wcxaaa",
      avatar: "github-avatar.jpg",
      type: "type-social",
      cover: "",
      photos: [],
    },
    {
      dbname: "nexus-github",
      name: "My Github",
      description: "My Github",
      url: "https://github.com/valorad",
      avatar: "github-avatar.jpg",
      type: "type-social",
      cover: "",
      photos: [],
    },
  ];

  aboutMeProps: IAboutMeProps = {
    children: {
      xmjList: {
        xiaoMaJias: []
      }
    }
  };

  thankYouProps: IThankYouProps = {
    nextSites: [
      {
        dbname: "nexus-github-site",
        name: "My Github",
        description: "My Github",
        url: "https://github.com/valorad",
        avatar: "github-avatar.jpg",
        type: "type-site",
        cover: "",
        photos: [],
      },
      {
        dbname: "nexus-3yibao-react-site",
        name: "3yibao React",
        description: "3yibao React",
        url: "https://www.wcnexus.com/3yibao",
        avatar: "3yibao.jpg",
        type: "type-site",
        cover: "",
        photos: [],
      },
      {
        dbname: "nexus-billy-cdk-site",
        name: "BillyCDK.dll",
        description: "BillyCDK.dll",
        url: "https://www.wcnexus.com/bdk",
        avatar: "bdk.jpg",
        type: "type-site",
        cover: "",
        photos: [],
      },
    ],
    socialMedia: this.socialMedia,
  };

  welcomeProps: IWelcomeProps = {
    children: {
      gameWall: {
        games: []
      }
    }
  };

  projectCaseProps: IProjectCaseProps = {
    children: {
      projectList: {
        projects: [
          {
            dbname: "smart-eatout",
            name: "Smart Eat-Out",
            description: "Smart Eat-Out",
            techs: [],
            url: "",
            avatar: "",
            type: "type-project",
            cover: "",
            photos: [
              {
                dbname: "",
                url: "",
              }
            ]
          },
          {
            dbname: "billy-CDK",
            name: "billy-CDK",
            description: "billy-CDK",
            techs: [],
            url: "",
            avatar: "",
            type: "type-project",
            cover: "",
            photos: [
              {
                dbname: "",
                url: "",
              }
            ]
          },
          {
            dbname: "voila-CDN",
            name: "voila-CDN",
            description: "voila-CDN",
            techs: [],
            url: "",
            avatar: "",
            type: "type-project",
            cover: "",
            photos: [
              {
                dbname: "",
                url: "",
              }
            ]
          },
          {
            dbname: "Container-based AutoML",
            name: "Container-based AutoML",
            description: "Container-based AutoML",
            techs: [],
            url: "",
            avatar: "",
            type: "type-project",
            cover: "",
            photos: [
              {
                dbname: "",
                url: "",
              }
            ]
          },
          {
            dbname: "3yibao-react",
            name: "3yibao-react",
            description: "3yibao-react",
            techs: [],
            url: "",
            avatar: "",
            type: "type-project",
            cover: "",
            photos: [
              {
                dbname: "",
                url: "",
              }
            ]
          },
        ]
      }
    }
  }

  num = 0;
  isIMGShown = false;
  isLiuPPTShown = false;

  textDisplayTestContent = {
    content: textGopibutong.text
  };

  markdownDisplayProps = {
    content: textMarkdown,
    throttle: 3
  };

  textDialogProps = {
    id: "texttest",
    title: "Text Dialog"
  }

  navigateTo = (targetSlideIndex: number) => {  
    Reveal.slide(targetSlideIndex, 0);
  };

  constructor(
    private nexusService: NexusService
  ) { }

  onNumpadClicked = (e: Event) => {
    this.addNum();
  };

  onToggleIMGClicked = (e: Event) => {
    this.isIMGShown = !this.isIMGShown;
  };

  onLiuPPTClicked = (e: Event) => {
    this.isLiuPPTShown = !this.isLiuPPTShown;
  };


  addNum = () => {
    console.log("num++");
    
    this.num++;
  };

  ngOnInit(): void {

    // populate xmj list data
    for (let i = 0; i < 6; i++) {
      this.aboutMeProps.children.xmjList.xiaoMaJias.push({
        name: `xmj-${i}`,
        image: `avt-${i}.jpg`,
      });
    }

    // populate game wall data
    for (let i = 0; i < 30; i++) {
      this.welcomeProps.children.gameWall.games.push(
        {
          name: `game-${i}`,
          avatar: `ag${i}`,
          type: "type-game",
        } as INexus
      );
    }

    this.nexusService.getSingle("nexus-central")
      .subscribe(res => {
        console.log(res);
      });
  }

  ngAfterViewInit() {
    Reveal.initialize(
      {
        navigationMode: "linear",
        plugins: [
          Markdown,
          Highlight,
        ]
      }
    );
  }

}
