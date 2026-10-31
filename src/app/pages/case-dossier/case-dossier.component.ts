
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface Suspect {
  name: string;
  role: string;
  age: number;
  image: string;
  description: string;
  connection: string;
  statement: string;
}

interface Evidence {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  forensicFindings: string[];
}

interface CaseDossier {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  status: string;
  location: string;
  date: string;
  victim: string;
  tagline: string;
  summary: string;
  background: string[];
  crimeScene: string[];
  suspects: Suspect[];
  evidence: Evidence[];
  objectives: string[];
}


@Component({
  selector: 'app-case-dossier',
  templateUrl: './case-dossier.component.html',
  styleUrls: ['./case-dossier.component.scss']
})
export class CaseDossierComponent implements OnInit {

  caseId = '';

  dossier: CaseDossier | null = null;
  selectedEvidence: Evidence | null = null;

  cases: CaseDossier[] = [
    {
      id: '001',
      title: 'The Last Photograph',
      category: 'HOMICIDE',
      difficulty: 'Medium',
      status: 'Active',
      location: 'Studio A · Paris, France',
      date: 'October 30, 2026',
      victim: 'Arthur Moreau',
      tagline: 'Every photograph captures a moment. Some capture a secret.',
      summary: 'A renowned photographer has been found dead inside his private studio. His final photographic collection has disappeared.',
      background: [
        'Arthur Moreau was one of Paris’s most respected photographers. Known for his black-and-white portraits, he built a reputation photographing wealthy families, politicians, and influential public figures.',
        'Behind his professional work, Moreau maintained a private collection of photographs that was never intended for public viewing. Some of these images reportedly documented private meetings and relationships involving powerful individuals.',
        'During the weeks preceding his death, Moreau became increasingly secretive. He reportedly told an acquaintance that one photograph could change everything.',
        'On the evening of October 30, four individuals were invited to his private studio. Later that night, Moreau was found dead. His final collection was nowhere to be found.',
        'The circumstances surrounding his death remain unclear. Four people had access to the studio that evening, and each may have information relevant to the investigation.'
],

crimeScene: [
  'The body of Arthur Moreau was discovered inside his private photography studio.',
  'Several photographs were scattered across the floor.',
  'A chair had been knocked over near the main desk.',
  'A vintage camera remained positioned on its tripod.',
  'A photograph had been torn into several pieces.',
  'The studio door showed no obvious signs of forced entry.',
  'The victim’s final photographic collection was missing.'
],

suspects: [
  {
    name: 'Elena Vale',
    role: 'Personal Assistant',
    age: 32,
    image: 'assets/images/elena-vale.png',
    description: 'Arthur’s personal assistant for nearly five years. She managed his appointments, correspondence, and access to the private studio.',
    connection: 'Had detailed knowledge of Arthur’s daily routine and the people he met privately.',
    statement: 'I left the studio before the evening ended. Arthur wanted to work alone, so I did not question him.'
  },
  {
    name: 'Victor Hale',
    role: 'Business Partner',
    age: 48,
    image: 'assets/images/victor-hale.png',
    description: 'A successful art dealer who helped finance Arthur’s photography studio and commercial projects.',
    connection: 'Had business interests connected to Arthur’s private photographic collection.',
    statement: 'Arthur and I had disagreements, certainly. But business disagreements are not unusual between partners.'
  },
  {
    name: 'Daniel Reed',
    role: 'Investigative Journalist',
    age: 36,
    image: 'assets/images/daniel-reed.png',
    description: 'A journalist who had been meeting Arthur privately during the weeks before his death.',
    connection: 'Was seeking information about photographs Arthur had refused to publish.',
    statement: 'Arthur contacted me. I was interested in his information, but he never told me everything.'
  },
  {
    name: 'Margaret Whitmore',
    role: 'Former Client',
    age: 44,
    image: 'assets/images/margaret-whitmore.png',
    description: 'A wealthy former client who had commissioned several private photographic sessions with Arthur.',
    connection: 'Maintained a long professional relationship with the photographer.',
    statement: 'I knew Arthur professionally. Whatever he kept in his private collection was his business.'
  }
],

evidence: [
  {
    id: '01',
    name: 'Vintage Camera',
    category: 'PHOTOGRAPHIC EQUIPMENT',
    image: 'assets/images/vintage-camera.png',
    description: 'Arthur’s main camera was found on his desk. It contains a memory card with recent photographs.',
    forensicFindings: [
  'The memory card contains photographs taken on the evening of October 30.',
  'The final photograph was captured at 22:47.',
  'One image appears to have been partially deleted.'
]
  },
  {
    id: '02',
    name: 'Torn Photograph',
    category: 'PHOTOGRAPHIC MATERIAL',
    image: 'assets/images/torn-photograph.png',
    description: 'A torn photograph was found on the floor near the main desk. Part of the image is missing.',
    forensicFindings: [
  'The photograph was torn by hand rather than cut with a blade.',
  'A partial reflection is visible in the remaining section.',
  'The photograph appears to have been taken inside Studio A.'
]
  },
  {
    id: '03',
    name: 'Scattered Photographs',
    category: 'PHOTOGRAPHIC MATERIAL',
    image: 'assets/images/scattered-photographs.png',
    description: 'Several photographs were found scattered across the studio floor. They appear to have been dropped in a hurry.',
    forensicFindings: [
  'Most photographs depict private meetings involving Arthur.',
  'Several photographs are missing from the collection.',
  'One photograph contains a handwritten date on its reverse.'
]
  },
  {
    id: '04',
    name: 'Studio Access Records',
    category: 'DOCUMENT',
    image: 'assets/images/studio-access-records.png',
    description: 'A notebook containing studio access records was found in a drawer. It lists people who visited in recent weeks.',
    forensicFindings: [
  'The notebook contains handwritten visitor records.',
  'Several entries have been crossed out.',
  'The page for October 30 contains an unusual gap.'
]
  },
  {
    id: '05',
    name: 'Personal Effects',
    category: 'PERSONAL BELONGINGS',
    image: 'assets/images/personal-effects.png',
    description: 'Various personal items were found on the desk, including notes, a letter, and a closed envelope.',
    forensicFindings: [
  'A sealed envelope was found among Arthur’s personal belongings.',
  'The envelope contains a handwritten note.',
  'The note references a meeting scheduled for October 30.'
]
  }
],

objectives: []
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.caseId = this.route.snapshot.paramMap.get('id') || '';

    this.dossier = this.cases.find(
      caseFile => caseFile.id === this.caseId
    ) || null;
  }
    examineEvidence(item: Evidence): void {
    this.selectedEvidence = item;
  }

  closeEvidence(): void {
    this.selectedEvidence = null;
  }

  goBack(): void {
    this.router.navigate(['/cases']);
  }
}
