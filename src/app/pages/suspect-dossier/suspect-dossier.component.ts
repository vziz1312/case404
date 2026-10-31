import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Suspect {
  id: string;
  name: string;
  role: string;
  age: number;
  image: string;
  description: string;
  connection: string;
  statement: string;
}

@Component({
  selector: 'app-suspect-dossier',
  templateUrl: './suspect-dossier.component.html',
  styleUrls: ['./suspect-dossier.component.scss']
})
export class SuspectDossierComponent implements OnInit {

  suspect: Suspect | null = null;

  suspects: Suspect[] = [
    {
      id: 'elena-vale',
      name: 'Elena Vale',
      role: 'Personal Assistant',
      age: 32,
      image: 'assets/images/elena-vale.png',
      description: 'Arthur’s personal assistant for nearly five years. She managed his appointments, correspondence, and access to the private studio.',
      connection: 'Had detailed knowledge of Arthur’s daily routine and the people he met privately.',
      statement: 'I left the studio before the evening ended. Arthur wanted to work alone, so I did not question him.'
    },
    {
      id: 'victor-hale',
      name: 'Victor Hale',
      role: 'Business Partner',
      age: 48,
      image: 'assets/images/victor-hale.png',
      description: 'A successful art dealer who helped finance Arthur’s photography studio and commercial projects.',
      connection: 'Had business interests connected to Arthur’s private photographic collection.',
      statement: 'Arthur and I had disagreements, certainly. But business disagreements are not unusual between partners.'
    },
    {
      id: 'daniel-reed',
      name: 'Daniel Reed',
      role: 'Investigative Journalist',
      age: 36,
      image: 'assets/images/daniel-reed.png',
      description: 'A journalist who had been meeting Arthur privately during the weeks before his death.',
      connection: 'Was seeking information about photographs Arthur had refused to publish.',
      statement: 'Arthur contacted me. I was interested in his information, but he never told me everything.'
    },
    {
      id: 'margaret-whitmore',
      name: 'Margaret Whitmore',
      role: 'Former Client',
      age: 44,
      image: 'assets/images/margaret-whitmore.png',
      description: 'A wealthy former client who had commissioned several private photographic sessions with Arthur.',
      connection: 'Maintained a long professional relationship with the photographer.',
      statement: 'I knew Arthur professionally. Whatever he kept in his private collection was his business.'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.suspect = this.suspects.find(item => item.id === id) || null;
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}