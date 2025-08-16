import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 // Input property to receive the current state of the sidebar from the parent (AppComponent)
  @Input() isSidebarOpen: boolean = false;
  @Input() user:any;

  // Output event emitter to notify the parent (AppComponent) when the toggle button is clicked
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter();

  /**
   * Emits the toggleSidebarEvent to the parent component.
   * This method is called when the Material Design icon button is clicked.
   */
  onToggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  getInitials(name: string): string {
  if (!name) return '';

  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    // Single name → take first letter
    return parts[0].charAt(0).toUpperCase();
  }

  // Multiple words → take first letters of first & last word
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
  }

  logout(){
    this.logoutEvent.emit()
  }
}
