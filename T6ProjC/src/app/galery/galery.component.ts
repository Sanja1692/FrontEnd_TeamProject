import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit() {
    this.router.navigate(["/galery"]);
  }

  goDown1() {
    this.scroller.scrollToAnchor("weddings");
  }

  goDown2() {
    this.scroller.scrollToAnchor("landscape");

  }

  goDown3() {
    this.scroller.scrollToAnchor("portraits");
  }
  goDown4() {
    this.scroller.scrollToAnchor("babies");
  }
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
}
