import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthenticationService } from '../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  notificationItems: Array<{}>;
  languages: Array<{
    id: number,
    flag?: string,
    name: string
  }>;
  selectedLanguage: {
    id: number,
    flag?: string,
    name: string
  };

  showFirst: boolean;
  showSecond: boolean;

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.openMobileMenu = false;
    this.showFirst = true;
    this.showSecond = false;
  }

  darkSidebar() {
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.add('left-side-menu-dark');
    document.body.classList.remove('topbar-light');
    document.body.classList.remove('boxed-layout');
    this.showSecond = true;
    this.showFirst = false;
  }

  lightTopbar() {
    document.body.classList.add('left-side-menu-sm');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.remove('boxed-layout');
    this.showFirst = true;
    this.showSecond = false;
  }

  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
}
