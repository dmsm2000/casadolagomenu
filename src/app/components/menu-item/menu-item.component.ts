import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
  <div class="flex justify-between items-center mt-5">
    <div>
      <h4 class="text-white text-2xl font-bold">{{ text }}</h4>
      <span class="text-white py-1 text-md">{{ description }}</span>
    </div>
    <span class="text-white text-2xl ml-5 font-bold">
      {{ value }}€
    </span>
  </div>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() text: string = '';
  @Input() description: string = '';
  @Input() value: string = '0';
}
