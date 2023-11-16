import { Component, OnInit } from '@angular/core';
import menuData from './menu-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Casa do Lago - Menu';
  menuSections: any[] = menuData.menu;
}
