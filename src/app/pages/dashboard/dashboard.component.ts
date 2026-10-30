
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

interface Activity {
  title: string;
  detail: string;
  time: string;
  initials: string;
  color: string;
}

interface SearchItem {
  label: string;
  type: string;
  reference: string;
  section: string;
}

interface SuspectPreview {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  activeNavigation = 'Dashboard';
  searchQuery = '';
  showCasePreview = false;
  notice = '';

  navigationGroups: NavigationGroup[] = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Dashboard', icon: '⌂' },
        { label: 'Cases', icon: '▤', badge: '01' },
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

  activities: Activity[] = [
    {
      title: 'New evidence discovered',
      detail: 'Camera metadata · E06',
      time: '12 minutes ago',
      initials: 'EV',
      color: 'brass'
    },
    {
      title: 'Suspect interrogated',
      detail: 'Elena Vale · Interview 02',
      time: '48 minutes ago',
      initials: 'EV',
      color: 'wine'
    },
    {
      title: 'Notebook updated',
      detail: 'Timeline reconstruction',
      time: '2 hours ago',
      initials: 'DN',
      color: 'olive'
    },
    {
      title: 'New contradiction found',
      detail: 'Security access record',
      time: 'Yesterday',
      initials: 'MC',
      color: 'slate'
    }
  ];

  searchIndex: SearchItem[] = [
    { label: 'The Last Photograph', type: 'CASE FILE', reference: 'CASE / 001', section: 'Cases' },
    { label: 'Elena Vale', type: 'SUSPECT', reference: 'SUSPECT / 01', section: 'Suspects' },
    { label: 'Marcus Black', type: 'SUSPECT', reference: 'SUSPECT / 02', section: 'Suspects' },
    { label: 'Sophie Lane', type: 'SUSPECT', reference: 'SUSPECT / 03', section: 'Suspects' },
    { label: 'Daniel Wright', type: 'SUSPECT', reference: 'SUSPECT / 04', section: 'Suspects' },
    { label: 'Camera Metadata', type: 'EVIDENCE', reference: 'EVIDENCE / 06', section: 'Evidence' },
    { label: 'Security Access Record', type: 'EVIDENCE', reference: 'EVIDENCE / 05', section: 'Evidence' },
    { label: 'Broken Watch', type: 'EVIDENCE', reference: 'EVIDENCE / 01', section: 'Evidence' }
  ];

  suspects: SuspectPreview[] = [
    { name: 'Elena Vale', role: 'ART CURATOR', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85' },
    { name: 'Marcus Black', role: 'BUSINESS PARTNER', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85' },
    { name: 'Sophie Lane', role: 'ASSISTANT', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=85' },
    { name: 'Daniel Wright', role: 'JOURNALIST', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=85' }
  ];

  get filteredSearchItems(): SearchItem[] {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) return [];

    return this.searchIndex.filter(item =>
      `${item.label} ${item.type} ${item.reference}`.toLowerCase().includes(query)
    );
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  selectNavigation(label: string): void {

  if (label === 'Cases') {
    this.router.navigate(['/cases']);
    return;
  }

  this.activeNavigation = label;
  this.notice = label === 'Dashboard'
    ? ''
    : `${label} workspace is coming next. Your dashboard and investigation data are safe.`;

  this.searchQuery = '';
}

  selectSearchResult(item: SearchItem): void {
    this.selectNavigation(item.section);
    this.notice = `Selected ${item.reference} — ${item.label}. This investigation section is next on our build list.`;
  }

  openCasePreview(): void {
    this.showCasePreview = true;
  }

  closeCasePreview(): void {
    this.showCasePreview = false;
  }

  openCaseWorkspace(): void {
    this.showCasePreview = false;
    this.selectNavigation('Cases');
  }
}
