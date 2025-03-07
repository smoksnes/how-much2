import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'reaction',
  imports: [],
  templateUrl: './reaction.component.html',
  styleUrl: './reaction.component.scss',
  animations: [
    trigger('flowInFadeOut', [
      state('void', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        animate('1s ease-out')
      ]),
      transition('* => void', [
        animate('1s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ReactionComponent {
}