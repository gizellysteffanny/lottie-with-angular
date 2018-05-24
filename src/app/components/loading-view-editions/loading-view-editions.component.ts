import { Component, OnInit } from '@angular/core';

import { LottieWeb } from 'lottie-web';

@Component({
  selector: 'app-loading-view-editions',
  templateUrl: './loading-view-editions.component.html',
  styleUrls: ['./loading-view-editions.component.scss']
})
export class LoadingViewEditionsComponent implements OnInit {
  public lottieConfig: Object;
  constructor() {
    this.lottieConfig = {
      path: 'assets/animations/data.json',
      autoplay: true,
      loop: true,
      renderer: 'svg',
      rendererSettings: {
        hideOnTransparent: true
      }
    };
  }

  ngOnInit() {
  }

}
