
import { Router } from '@angular/router';
import { Component } from '@angular/core';

export interface CaseFile {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  status: 'Active' | 'Locked' | 'Completed';
  description: string;
  location: string;
  suspects: number;
  evidence: number;
  progress: number;
  image: string;
}

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {
  
  constructor(private router: Router) {}

  openCase(caseFile: CaseFile): void {
  if (caseFile.status === 'Locked') {
    return;
  }

  this.router.navigate(['/cases', caseFile.id]);
}

  searchQuery = '';

  filters = ['All', 'Active', 'Completed', 'Locked'];

  activeFilter = 'All';

  cases: CaseFile[] = [
    {
      id: '001',
      title: 'The Last Photograph',
      category: 'HOMICIDE',
      difficulty: 'Medium',
      status: 'Active',
      description: 'A famous photographer was found dead in his private studio. His final collection has disappeared.',
      location: 'Studio A · Paris',
      suspects: 4,
      evidence: 12,
      progress: 0,
      image: 'assets/images/case-cover.png'
    },
    {
      id: '002',
      title: 'The Hollow Witness',
      category: 'DISAPPEARANCE',
      difficulty: 'Hard',
      status: 'Locked',
      description: 'A witness vanished hours before giving testimony in a high-profile trial.',
      location: 'District 09 · London',
      suspects: 5,
      evidence: 0,
      progress: 0,
      image: ''
    },
    {
      id: '003',
      title: 'Midnight at the Grand',
      category: 'THEFT',
      difficulty: 'Easy',
      status: 'Locked',
      description: 'A priceless diamond disappeared during a private gathering. Nobody claims to have seen anything.',
      location: 'Grand Hotel · Geneva',
      suspects: 3,
      evidence: 0,
      progress: 0,
      image: ''
    },
    {
      id: '004',
      title: 'A Debt in Blood',
      category: 'MURDER',
      difficulty: 'Expert',
      status: 'Locked',
      description: 'An anonymous letter points to a crime that may have been hidden for twenty years.',
      location: 'Old Quarter · Rome',
      suspects: 6,
      evidence: 0,
      progress: 0,
      image: ''
    }
    
  ];

  get totalCases(): number {
    return this.cases.length;
  }

  get activeCases(): number {
    return this.cases.filter(c => c.status === 'Active').length;
  }

  get completedCases(): number {
    return this.cases.filter(c => c.status === 'Completed').length;
  }

  get lockedCases(): number {
    return this.cases.filter(c => c.status === 'Locked').length;
  }

  get filteredCases(): CaseFile[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.cases.filter(caseFile => {

      const matchesFilter =
        this.activeFilter === 'All' ||
        caseFile.status === this.activeFilter;

      const matchesSearch =
        caseFile.title.toLowerCase().includes(query) ||
        caseFile.category.toLowerCase().includes(query) ||
        caseFile.location.toLowerCase().includes(query) ||
        caseFile.id.includes(query);

      return matchesFilter && matchesSearch;
    });
  }

  selectFilter(filter: string): void {
    this.activeFilter = filter;
  }

}
