import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  showDragHereText: boolean = true;

  constructor(private dialog: MatDialog) { }

  onDrop(event: CdkDragDrop<string[]>): void {
   
    if (event.previousContainer === event.container) {
    
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
   
      this.showDragHereText = false;
      window.alert('Item dropped!');
      this.dialog.open(DialogComponent, {
        data: { message: 'Hello' }
      });
    }
  }
}

