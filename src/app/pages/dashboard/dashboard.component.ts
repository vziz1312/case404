
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
  openSuspect(suspect: any): void {
  const suspectRoutes: { [key: string]: string } = {
    'Elena Vale': 'elena-vale',
    'Victor Hale': 'victor-hale',
    'Daniel Reed': 'daniel-reed',
    'Margaret Whitmore': 'margaret-whitmore'
  };

  

  const suspectId = suspectRoutes[suspect.name];

  if (suspectId) {
    this.router.navigate(['/suspects', suspectId]);
  }
}
openLead(lead: string): void {
  switch (lead) {
    case 'camera':
    case 'records':
      this.router.navigate(['/cases', '001']);
      break;

    case 'elena':
      this.router.navigate(['/suspects', 'elena-vale']);
      break;
  }
}

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
    title: 'Evidence examined',
    detail: 'Vintage Camera · E01',
    time: '12 minutes ago',
    initials: 'E01',
    color: 'brass'
  },
  {
    title: 'Suspect interview recorded',
    detail: 'Elena Vale · Interview 01',
    time: '48 minutes ago',
    initials: 'S01',
    color: 'wine'
  },
  {
    title: 'Investigation timeline updated',
    detail: 'Studio A · October 30',
    time: '2 hours ago',
    initials: 'LOG',
    color: 'olive'
  },
  {
    title: 'Evidence registered',
    detail: 'Studio Access Records · E04',
    time: 'Yesterday',
    initials: 'E04',
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

suspects = [
  {
    name: 'Elena Vale',
    role: 'PERSONAL ASSISTANT',
    image: 'assets/images/elena-vale.png'
  },
  {
    name: 'Victor Hale',
    role: 'BUSINESS PARTNER',
    image: 'assets/images/victor-hale.png'
  },
  {
    name: 'Daniel Reed',
    role: 'INVESTIGATIVE JOURNALIST',
    image: 'assets/images/daniel-reed.png'
  },
  {
    name: 'Margaret Whitmore',
    role: 'FORMER CLIENT',
    image: 'assets/images/margaret-whitmore.png'
  }
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
