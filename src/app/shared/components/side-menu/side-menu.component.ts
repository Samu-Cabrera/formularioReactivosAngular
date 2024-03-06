import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public sideMenuItem: MenuItem[] = [
    {
      title: 'Basicos',
      route: '/reactive/basic'
    },
    {
      title: 'Dynamic',
      route: '/reactive/dynamic'
    },
    {
      title: 'Switches',
      route: '/reactive/switches'
    }
  ];

  public authMenu = [
    {
      title: 'Register',
      route: '/register/sign-in'
    }
  ]

}
