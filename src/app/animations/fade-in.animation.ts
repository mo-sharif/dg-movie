import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

const fadeIn = trigger("fadeIn", [
  state("in", style({ opacity: 1 })),

  transition(":enter", [style({ opacity: 0 }), animate(600)]),

  transition(":leave", animate(600, style({ opacity: 0 })))
]);

export default fadeIn;