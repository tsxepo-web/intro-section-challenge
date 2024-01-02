import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isMenuVisible = false;
  openDropdownIndex: number | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('window:click', ['event'])
  clickout(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event)) {
      console.log('clicked');
      this.closeDropdown();
    }
  }

  @HostListener('window:keydown.escape', ['event'])
  onEscape(event: KeyboardEvent) {
    this.closeDropdown();
  }

  closeDropdown() {
    this.openDropdownIndex = null;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleDropdown(index: number) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }
  isDropdownOpen(index: number): boolean {
    return this.openDropdownIndex === index;
  }
}
