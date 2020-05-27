import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  HostBinding,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';
import {Router, RouterOutlet} from '@angular/router';
import {trigger, state, style, animate, transition, query} from '@angular/animations';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';

import { untilDestroyed } from '@app/core';

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

export enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('toggle', [
      state(VisibilityState.Hidden, style({ transform: 'translateY(-100%)' })),
      state(VisibilityState.Visible, style({ transform: 'translateY(0)' })),
      transition('* => *', animate('300ms linear'))
    ]),
  ]
})
export class ShellComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('cursor') cursor: ElementRef;
  private isVisible = true;

  constructor(
    private media: MediaObserver,
    private router: Router,
  ) {}

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.some(change => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')),
        untilDestroyed(this)
      )
      .subscribe(() => this.sidenav.close());
  }

  // @HostBinding('@toggle')
  // get toggle(): VisibilityState {
  //   return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  // }

  ngAfterViewInit() {
    // this.scrollActions();
  }

  ngOnDestroy() {
    // Needed for automatic unsubscribe with untilDestroyed
  }

  // @HostListener('window:scroll', ['$event'])
  // scrollActions() {
  //   const scroll$ = fromEvent(window, 'scroll').pipe(
  //     throttleTime(100),
  //     map(() => window.pageYOffset),
  //     pairwise(),
  //     map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
  //     distinctUntilChanged(),
  //     share()
  //   );
  //
  //   const scrollUp$ = scroll$.pipe(filter(direction => direction === Direction.Up));
  //
  //   const scrollDown$ = scroll$.pipe(filter(direction => direction === Direction.Down));
  //
  //   scrollUp$.subscribe(() => (this.isVisible = true));
  //   scrollDown$.subscribe(() => (this.isVisible = false));
  // }

  getRoute() {
    if (this.router.url === ('/' || '/contact')) {
      return 'dark-bg';
    }
  }

  // cursor
  // @HostListener('click', ['$event'])
  // onClick() {
  //   this.renderer.addClass(this.cursor.nativeElement, 'expand');
  //   setTimeout(() => {
  //     this.renderer.removeClass(this.cursor.nativeElement, 'expand');
  //   }, 500)
  // }
  //
  // @HostListener('mousemove', ['$event'])
  //   onMousedown() {
  //     // this.renderer.setStyle(this.cursor.nativeElement, 'top', e.pageY - 15+'px');
  //     // this.renderer.setStyle(this.cursor.nativeElement, 'left', e.pageX - 15+'px');
  //   }
}
