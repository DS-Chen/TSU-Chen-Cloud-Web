import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['/header.component.less']
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService) { }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
