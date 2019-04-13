
import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { NhanVienServicesService} from '../services/nhan-vien-services.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Nhanvien } from '../modules/nhanvien';
import {  OnInit } from '@angular/core';




@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.css'],
  providers: [DecimalPipe,NhanVienServicesService]
})
export class NhanVienComponent implements OnInit 
 {

  allNV: Nhanvien[];
  id:string;
  
  constructor(pipe: DecimalPipe, private nvService:NhanVienServicesService) 
  {
    this.id='NV001';
  }
 getallNV(){
  this.nvService.getAllNhanVien().subscribe(all=>{this.allNV=all; console.log(this.allNV);});
 }
 delete(id:string){
   this.nvService.deleteNhanVien(id).subscribe(()=>alert("deleted"));
   this.getallNV();
 }
 
  ngOnInit(): void {
   
   this.getallNV();
  }
}
