import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input ('size') size = 'small';
  @Input ('shade') shade = 'NA';
  @Input ('hover') hover = 'R' ; // R fade animation, C circule animation
  @Input ('name') name = 'button';
                                 

}
