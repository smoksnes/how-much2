import {Component, Input} from '@angular/core';
import {trigger, transition, state, animate, style, AnimationEvent} from '@angular/animations';


@Component({
  selector: 'reaction',
  imports: [],
  templateUrl: './reaction.component.html',
  styleUrl: './reaction.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateY(20%)',
          opacity: 1,
        }),
      ),
      state(
        'closed',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1.3s')]),
    ]),
  ],
})
export class ReactionComponent {
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isOpen = true;
    }, 100);
  }

  onAnimationEvent(event: AnimationEvent) {
    console.warn(`Animation Trigger: ${event.triggerName}`);
    console.warn(`Phase: ${event.phaseName}`);
    console.warn(`Total time: ${event.totalTime}`);
    console.warn(`From: ${event.fromState}`);
    console.warn(`To: ${event.toState}`);
    console.warn(`Element: ${event.element}`);
  }
}
