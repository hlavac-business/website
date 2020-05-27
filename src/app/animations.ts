import {animate, trigger, transition, style, query, animateChild, group, state} from '@angular/animations';

export const fadeIn = trigger('routeAnimations', [
  state('void', style({position: 'absolute', width: '100%'})),
  state('*', style({position: 'absolute', width: '100%'})),
  transition('void => *', [
    style({opacity: 0}),
    animate('1s ease-in-out', style({ opacity: 1}))
  ]),
  transition('* => void', [
    style({transform: 'translateX(0%)', opacity: 1}),
    animate('1s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0}))
  ]),
  transition('void => *', []),
  transition('* => void', [
    style({zIndex: -1}),
    animate('0ms 200ms', style({zIndex: -1}))
  ])
]);
