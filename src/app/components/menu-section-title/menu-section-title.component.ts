import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu-section-title',
  template: `
    <h2 class="text-white font-bold text-3xl my-2">{{ text }}</h2>
  `,
  styleUrls: ['./menu-section-title.component.scss']
})
export class MenuSectionTitleComponent {
  @Input() text: string = '';
}
