import { Component, OnInit} from '@angular/core';
import { PawServiceService } from '../paw-service.service';
import { Paw } from '../model/Paw';
import { MatDialog } from '@angular/material/dialog';
import { ViewPawComponent } from '../view-paw/view-paw.component';

@Component({
  selector: 'app-view-all-paws',
  templateUrl: './view-all-paws.component.html',
  styleUrls: ['./view-all-paws.component.scss']
})
export class ViewAllPawsComponent implements OnInit {

  allPaws: Paw[] = [];

  constructor(private service: PawServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllPaws().subscribe(res =>{
       this.allPaws = res;
      console.log(this.allPaws);
    }
    );
    console.log("outside api call");
  }

  openDialog(paw: any): void {
    console.log('Opening dialog for:', paw);
    this.dialog.open(ViewPawComponent, {
      data: paw,
      width: '400px'
    });
  }

  

}
