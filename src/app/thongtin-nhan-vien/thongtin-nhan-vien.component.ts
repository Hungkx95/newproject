import { Component, OnInit, Input } from '@angular/core';
import { Nhanvien } from '../modules/nhanvien';
import { ActivatedRoute } from '@angular/router';
import { NhanVienServicesService } from '../services/nhan-vien-services.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { isUndefined } from 'util';
import { PhongBanService } from '../services/phong-ban.service';
import { Chucvu } from '../modules/chucvu';

@Component({
  selector: 'app-thongtin-nhan-vien',
  templateUrl: './thongtin-nhan-vien.component.html',
  styleUrls: ['./thongtin-nhan-vien.component.css']
})
export class ThongtinNhanVienComponent implements OnInit {
  @Input() nv: Nhanvien;
  nhanvien :Nhanvien;
  chucvu:Chucvu[];
  constructor(
    private route: ActivatedRoute,
    private NVS: NhanVienServicesService,
    private location: Location,
    private PBS:PhongBanService,
  ) { }

  ngOnInit() {
    this.getNhanVien();this.getChucVu();
  }
getNhanVien():void{
    const id:string= this.route.snapshot.paramMap.get('id');
    
    this.NVS.getNhanVienById(id).subscribe(p=>{this.nv=p});
    
  }
  updateNV(nv:Nhanvien){
    this.NVS.updateNhanVien(nv).subscribe(s=>this.nv=s);
  }
  goBack(): void {
    this.location.back();
  }

 getChucVu(){
  const id:string= this.route.snapshot.paramMap.get('id');
   this.NVS.getChucVu(id).subscribe(data=>{this.chucvu=data;console.log(data);});
 }






  Luu():void{
    console.log(this.nv);
    this.NVS.updateNhanVien(this.nv).subscribe(data=>{
      if(data===undefined){alert("Lỗi");} 
      else {
        this.nv=data;
        alert ("Thành Công");
      } 
      });
     
  }
}
