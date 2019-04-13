
import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable, from } from 'rxjs';
import { map, startWith, max } from 'rxjs/operators';
import { PhongBan } from '../modules/phongban';
import { PhongBanService } from '../services/phong-ban.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-phong-ban',
  templateUrl: './phong-ban.component.html',
  styleUrls: ['./phong-ban.component.css'],
  providers: [DecimalPipe]
})
export class PhongBanComponent {
 //new
phongbans:PhongBan[];

//
  allPB :PhongBan[];
  id :string;
  idPB:string;
  filter = new FormControl('');
  pb:PhongBan;// = new PhongBan();
  IDpb='';
  constructor( private PBS:PhongBanService,
    private router: ActivatedRoute) {

  
  }

  ngOnInit() {
    this.getAllPhongBan();
  }
  // lasy pb
getAllPhongBan():void{
  this.PBS.getAllPB().subscribe(phongbans=> this.phongbans=phongbans);
}
// xoa
delete(id:string):void{
  this.phongbans=this.phongbans.filter(h=>h.id!==id);
  this.PBS.deletePhongBan(id).subscribe();
  
  
}
// them pb
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.PBS.addPhongBan({name} as PhongBan)
    .subscribe(hero => {
      this.phongbans.push(hero);
    });
}


  onSearchChange(){
    
    
  }
 
  
}
