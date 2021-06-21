import { Component, OnInit } from '@angular/core';
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { NexusService } from 'src/app/services/nexus.service';
import MicroModal from 'micromodal';
import textGopibutong from 'src/statics/data/Misc/text-gopibutong';
import textMarkdown from 'src/statics/data/Misc/text-markdown';
import { IAboutMeProps } from 'src/app/models/interfaces/about-me.interface';
import { IThankYouProps } from 'src/app/models/interfaces/thank-you.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';

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
      logo: "github-avatar.jpg",
      type: "type-social",
    },
    {
      dbname: "nexus-zhihu",
      name: "My Zhihu",
      description: "My Zhihu",
      url: "https://www.zhihu.com/people/valorad",
      logo: "github-avatar.jpg",
      type: "type-social",
    },
    {
      dbname: "nexus-twitter",
      name: "My Twitter",
      description: "My Twitter",
      url: "https://twitter.com/wcxaaa",
      logo: "github-avatar.jpg",
      type: "type-social",
    },
    {
      dbname: "nexus-github",
      name: "My Github",
      description: "My Github",
      url: "https://github.com/valorad",
      logo: "github-avatar.jpg",
      type: "type-social",
    },
  ];

  aboutMeProps: IAboutMeProps = {
    children: {
      xmjList: {
        xiaoMaJias: []
      }
    }
  }

  thankYouProps: IThankYouProps = {
    nextSites: [
      {
        dbname: "nexus-github-site",
        name: "My Github",
        description: "My Github",
        url: "https://github.com/valorad",
        logo: "github-avatar.jpg",
        type: "type-site",
      },
      {
        dbname: "nexus-3yibao-react-site",
        name: "3yibao React",
        description: "3yibao React",
        url: "https://www.wcnexus.com/3yibao",
        logo: "3yibao.jpg",
        type: "type-site",
      },
      {
        dbname: "nexus-billy-cdk-site",
        name: "BillyCDK.dll",
        description: "BillyCDK.dll",
        url: "https://www.wcnexus.com/bdk",
        logo: "bdk.jpg",
        type: "type-site",
      },
    ],
    socialMedia: this.socialMedia,
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
