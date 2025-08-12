import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
 title = 'Angular Toggle Sidebar App'; // Your application title
 

  // Reference to the MatSidenav component in the template.
  // This allows us to programmatically open/close it.
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Property to control the sidebar's open/closed state.
  // It is bound to `[(opened)]` of the mat-sidenav.
  isSidebarOpen: boolean = false;

  // Get the current year for the footer copyright display.
  currentYear: number = new Date().getFullYear();

  /**
   * Toggles the state of the sidebar (open/closed).
   * This method is called by the HeaderComponent when its toggle button is clicked.
   */
  toggleSidenav(): void {
    this.sidenav.toggle(); // Uses MatSidenav's built-in toggle method
  }

  /**
   * Closes the sidebar.
   * This method is called by the SidebarComponent when a navigation link is clicked,
   * providing a smooth user experience after navigation.
   */
  closeSidenav(): void {
    this.sidenav.close(); // Uses MatSidenav's built-in close method
  }
}
