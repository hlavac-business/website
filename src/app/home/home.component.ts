import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mobile = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // this.shapesAnim();
    // this.resize();
    // this.loop();
    // window.addEventListener('resize', this.resize);

    if (window.screen.width <= 460) {
      // 768px portrait
      this.mobile = true;
    }
  }
}
