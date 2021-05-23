import { Component, OnInit } from '@angular/core';
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { NexusService } from 'src/app/services/nexus.service';
import MicroModal from 'micromodal';
import textGopibutong from 'src/statics/data/Misc/text-gopibutong';
import textMarkdown from 'src/statics/data/Misc/text-markdown';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.scss']
})
export class HomeViewComponent implements OnInit {

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

  constructor(
    private nexusService: NexusService
  ) { }

  onDialogBtnClick = (e: Event) => {
    MicroModal.show('dialog-texttest');
  };

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
