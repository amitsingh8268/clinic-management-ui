import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 // Input property to receive the current state of the sidebar from the parent (AppComponent)
  @Input() isSidebarOpen: boolean = false;

  // Output event emitter to notify the parent (AppComponent) when the toggle button is clicked
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  /**
   * Emits the toggleSidebarEvent to the parent component.
   * This method is called when the Material Design icon button is clicked.
   */
  onToggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }
}
