
import { Component } from '@angular/core';

export interface BoardItem {
  id: string;
  name: string;
  category: 'Suspect' | 'Evidence';
  subtitle: string;
  image: string;
}

export interface PlacedBoardItem extends BoardItem {
  x: number;
  y: number;
}

export interface BoardConnection {
  id: number;
  fromId: string;
  toId: string;
}

@Component({
  selector: 'app-investigation-board',
  templateUrl: './investigation-board.component.html',
  styleUrls: ['./investigation-board.component.scss']
})
export class InvestigationBoardComponent {

  getItemName(itemId: string): string {
  const item = this.placedItems.find(
    item => item.id === itemId
  );

  return item ? item.name : 'Unknown item';
}

  getItemX(itemId: string): number {
  const item = this.placedItems.find(item => item.id === itemId);
  return item ? item.x + 82 : 0;
}

getItemY(itemId: string): number {
  const item = this.placedItems.find(item => item.id === itemId);
  return item ? item.y + 85 : 0;
}

  connections: BoardConnection[] = [];
  selectedItemId: string | null = null;

  selectForConnection(item: PlacedBoardItem): void {
  if (!this.selectedItemId) {
    this.selectedItemId = item.id;
    return;
  }

  if (this.selectedItemId === item.id) {
    this.selectedItemId = null;
    return;
  }

  const exists = this.connections.some(connection =>
    (connection.fromId === this.selectedItemId && connection.toId === item.id) ||
    (connection.fromId === item.id && connection.toId === this.selectedItemId)
  );

  if (!exists) {
    this.connections.push({
      id: Date.now(),
      fromId: this.selectedItemId,
      toId: item.id
    });
  }

  this.selectedItemId = null;
}
  removeConnection(id: number): void {
  this.connections = this.connections.filter(
    connection => connection.id !== id
  );
}

  suspects: BoardItem[] = [
    {
      id: 'elena-vale',
      name: 'Elena Vale',
      category: 'Suspect',
      subtitle: 'Personal Assistant',
      image: 'assets/images/elena-vale.png'
    },
    {
      id: 'victor-hale',
      name: 'Victor Hale',
      category: 'Suspect',
      subtitle: 'Business Partner',
      image: 'assets/images/victor-hale.png'
    },
    {
      id: 'daniel-reed',
      name: 'Daniel Reed',
      category: 'Suspect',
      subtitle: 'Investigative Journalist',
      image: 'assets/images/daniel-reed.png'
    },
    {
      id: 'margaret-whitmore',
      name: 'Margaret Whitmore',
      category: 'Suspect',
      subtitle: 'Former Client',
      image: 'assets/images/margaret-whitmore.png'
    }
  ];

  evidence: BoardItem[] = [
    {
      id: 'E01',
      name: 'Vintage Camera',
      category: 'Evidence',
      subtitle: 'Final photograph · 22:47',
      image: 'assets/images/vintage-camera.png'
    },
    {
      id: 'E02',
      name: 'Torn Photograph',
      category: 'Evidence',
      subtitle: 'Partial reflection visible',
      image: 'assets/images/torn-photograph.png'
    },
    {
      id: 'E03',
      name: 'Scattered Photographs',
      category: 'Evidence',
      subtitle: 'Photographs from the studio',
      image: 'assets/images/scattered-photographs.png'
    },
    {
      id: 'E04',
      name: 'Studio Access Records',
      category: 'Evidence',
      subtitle: 'Visitor log · October 30',
      image: 'assets/images/studio-access-records.png'
    },
    {
      id: 'E05',
      name: 'Personal Effects',
      category: 'Evidence',
      subtitle: 'Items recovered at the scene',
      image: 'assets/images/personal-effects.png'
    }
  ];

  placedItems: PlacedBoardItem[] = [];

  get connectionCount(): number {
    return this.connections.length;
  }

  addToBoard(item: BoardItem): void {
  const alreadyAdded = this.isOnBoard(item.id);

  if (alreadyAdded) {
    return;
  }

  const offset = this.placedItems.length * 25;

  this.placedItems.push({
    ...item,
    x: 25 + offset,
    y: 90 + offset
  });
}

  removeFromBoard(itemId: string): void {
  // Remove the selected item from the board
  this.placedItems = this.placedItems.filter(
    item => item.id !== itemId
  );

  // Remove every connection involving this item
  this.connections = this.connections.filter(
    connection =>
      connection.fromId !== itemId &&
      connection.toId !== itemId
  );

  // Clear selection if the deleted item was selected
  if (this.selectedItemId === itemId) {
    this.selectedItemId = null;
  }
}

  isOnBoard(itemId: string): boolean {
    return this.placedItems.some(item => item.id === itemId);
  }

  onDragStart(event: DragEvent, item: PlacedBoardItem): void {
  event.dataTransfer?.setData('text/plain', item.id);

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move';
  }
}

onDragOver(event: DragEvent): void {
  event.preventDefault();
}

onDrop(event: DragEvent): void {
  event.preventDefault();

  const itemId = event.dataTransfer?.getData('text/plain');

  if (!itemId) {
    return;
  }

  const wall = event.currentTarget as HTMLElement;
  const bounds = wall.getBoundingClientRect();

  const item = this.placedItems.find(
    placedItem => placedItem.id === itemId
  );

  if (!item) {
    return;
  }

  item.x = Math.max(0, Math.min(
    event.clientX - bounds.left,
    bounds.width - 190
  ));

  item.y = Math.max(0, Math.min(
    event.clientY - bounds.top,
    bounds.height - 220
  ));
}

}
