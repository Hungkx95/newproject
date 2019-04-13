import { Component, OnInit, Input } from '@angular/core';
import { Nhanvien } from '../modules/nhanvien';
import { ActivatedRoute } from '@angular/router';
import { NhanVienServicesService } from '../services/nhan-vien-services.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.css']
})
export class ThemNhanVienComponent implements OnInit {
  newNV:Nhanvien;
  constructor( private route: ActivatedRoute, private NVS: NhanVienServicesService,  private location: Location) { }

  ngOnInit() {
    this.newNV=new Nhanvien();
  }

  addNV(){
    this.NVS.addNhanVien(this.newNV).subscribe(data=>this.newNV=data);
    console.log(this.newNV);
  }
  goBack(): void {
    this.location.back();
  }
}
