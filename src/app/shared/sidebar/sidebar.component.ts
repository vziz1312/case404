
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavigationItem {
  label: string;
  icon: string;
  badge?: string;
}

interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navigationGroups: NavigationGroup[] = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Dashboard', icon: '⌂' },
        { label: 'Cases', icon: '▤', badge: '01' },
        { label: 'Investigation Board', icon: '▦' },
        { label: 'Evidence', icon: '◇', badge: '12' },
        { label: 'Suspects', icon: '♙', badge: '04' }
      ]
    },
    {
      title: "DETECTIVE'S DESK",
      items: [
        { label: 'Notebook', icon: '▧' },
        { label: 'Profile', icon: '◉' }
      ]
    }
  ];

  constructor(private router: Router) {}

  get activeNavigation(): string {
  const path = this.router.url.split('?')[0];

  if (path.startsWith('/investigation-board')) return 'Investigation Board';
  if (path.startsWith('/cases')) return 'Cases';
  if (path.startsWith('/dashboard') || path === '/') return 'Dashboard';

  return '';
}

  selectNavigation(label: string): void {
    if (label === 'Dashboard') {
      this.router.navigate(['/dashboard']);
    }

    if (label === 'Cases') {
      this.router.navigate(['/cases']);
    }
    if (label === 'Investigation Board') {
      this.router.navigate(['/investigation-board']);
    }
  }
}
