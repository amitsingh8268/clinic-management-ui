import { Component, EventEmitter, Output } from '@angular/core';
import { menu } from './sidebar-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Output event emitter to notify the parent (AppComponent) that a link was clicked.
  // This can be used by the parent to close the sidebar after navigation.
  @Output() linkClicked = new EventEmitter<void>();
  menuItems = menu;

  /**
   * Emits the `linkClicked` event when any navigation link in the sidebar is clicked.
   */
  onLinkClicked(): void {
    this.linkClicked.emit();
  }
 
}
