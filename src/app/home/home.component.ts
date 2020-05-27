import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {animationFrameScheduler, fromEvent, interval,} from "rxjs";
import {
  distinctUntilChanged,
  map,
  merge,
  share,
  throttleTime,
  withLatestFrom,
  scan,
  filter,
  debounceTime, distinct
} from 'rxjs/operators';

interface  Expo {
  x: number;
  y: number;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile = false;
  @ViewChild('circles') circles: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('mouse') mouse: ElementRef;
  @ViewChild('aboutBg') aboutBg: ElementRef;
  @ViewChild('reveal') reveal: ElementRef;
  scrollHeight = 0;
  scrollOffset = 0;
  scrollPercent = 0;
  indicatorPosition = this.scrollPercent;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // this.shapesAnim();
    // this.resize();
    // this.loop();
    // window.addEventListener('resize', this.resize);

    if (window.screen.width <= 460) { // 768px portrait
      this.mobile = true;
    }
  }

  // Circles position
  // shapesAnim() {
  //   const clientHeight = window.innerHeight;
  //   const clientWidth = window.innerWidth;
  //   const mouseMove$ = fromEvent(window, 'mousemove').pipe(
  //     map((event: MouseEvent) => ({x: event.clientX, y: event.clientY}))
  //   );
  //
  //   // Stream of all touchmove events
  //   const touchMove$ = fromEvent(window, 'touchmove').pipe(
  //     map( (event: TouchEvent) => ({
  //       x: event.touches[0].clientX,
  //       y: event.touches[0].clientY
  //     }))
  //   );
  //
  //   // Combination of mousemove and touchmove streams
  //   const move$ = mouseMove$.pipe(merge(touchMove$));
  //
  //   // Stream of requestAnimationFrame ticks
  //   const animationFrame$ = interval(0, animationFrameScheduler);
  //
  //   const smoothMove$ = animationFrame$.pipe(
  //     withLatestFrom(move$, (tick, move) => move),
  //     // scan(this.lerp)
  //   );
  //
  //   // // Apply values to styles
  //   smoothMove$.subscribe(pos => {
  //     const rotX = (pos.y / clientHeight * -150) + 125;
  //     // const rotY = (pos.x / clientWidth * 150) - 125;
  //
  //     // this.circles.nativeElement.style.cssText = `transform: translateX(${rotX}px) translateY(${rotY}px);`;
  //   });
  //   }

  @HostListener('window:scroll', ['$event'])
  scrollActions() {
    //
    // // const titlePosition = this.title.nativeElement
    //
    // const scroll$ = fromEvent(window, 'scroll').pipe(
    //   throttleTime(1000),
    //   map((e) => window.pageYOffset),
    //   distinctUntilChanged(),
    //   share()
    // );
    //
    // // Stream of requestAnimationFrame ticks
    // const animationFrame$ = interval(0, animationFrameScheduler);
    //
    // const scrollWithoutDebounce$ = fromEvent(window, 'scroll').pipe(
    //   map(() => window.pageYOffset),
    //   distinctUntilChanged(),
    //   share()
    // );
    // const smoothScroll$ = animationFrame$.pipe(
    //   withLatestFrom(scrollWithoutDebounce$, (tick, scroll) => scroll),
    //   // scan(this.lerp)
    // );
    //
    //
    // smoothScroll$.subscribe( pos => {
    //   let scrollHeight = window.innerHeight*4;
    //   // console.log('pos', pos)
    //   // console.log('window.pageYOffset', pos)
    //   // console.log('scrollHeight', scrollHeight)
    //   let scrollPercent = pos/2;
    //   let indicatorPosition = scrollPercent;
    //   indicatorPosition += (scrollPercent-indicatorPosition)*0.05;
    //   // console.log(pos)
    //   this.title.nativeElement.style.cssText = `transform: translateY(${pos*0.05}px);`;
    //
    //
    //   // handle about-background rectangle position
    //   // const aboutcontainer = this.aboutBg.nativeElement.getBoundingClientRect();
    //   // const aboutBgPosition = aboutcontainer.top + (window.innerHeight - aboutcontainer.top)*0.05;
    //   // // console.log('aboutcontainer')
    //   // if (aboutBgPosition >= 100) {
    //   //   this.aboutBg.nativeElement.style.cssText = `left: ${aboutBgPosition - aboutBgPosition/2}px;`;
    //   // }
    //
    // })
    //
    //
    // scroll$.subscribe( pos => {
    //   // this.title.nativeElement.style.cssText = `transform: translateY(${pos/2}px);`;
    //
    //
    //   // handle mouse scroll icon visibility
    //   if (pos <= 50) {
    //     this.renderer.addClass(this.mouse.nativeElement, 'visible')
    //   } else {
    //     this.renderer.removeClass(this.mouse.nativeElement, 'visible')
    //   }
    // });
  }


  // Linear interpolation function
  // lerp(start: Expo, end: Expo) {
  //   const dx = end.x - start.x;
  //   const dy = end.y - start.y;
  //   const rate = 0.05;
  //
  //   return {
  //     x: start.x + dx * rate,
  //     y: start.y + dy * rate,
  //   };
  // }

  // lerpsmooth(start: number, end: number) {
  //   const dx = end.x - start.x;
  //   const dy = end.y - start.y;
  //   const rate = 0.05;
  //
  //   return {
  //     x: start.x + dx * rate,
  //     y: start.y + dy * rate,
  //   };
  // }
}
