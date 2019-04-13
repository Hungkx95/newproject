import { Component, OnInit, Input } from '@angular/core';
import { PhongBanService } from '../services/phong-ban.service';
import { ActivatedRoute } from '@angular/router';
import { TenCV } from '../modules/tenchucvu';
import {Location} from '@angular/common';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViTri } from '../modules/vitri';

@Component({
  selector: 'app-thay-doi-chuc-vu',
  templateUrl: './thay-doi-chuc-vu.component.html',
  styleUrls: ['./thay-doi-chuc-vu.component.css']
})
export class ThayDoiChucVuComponent implements OnInit {
  chucvus: TenCV[];
  @Input() idnv;
  @Input() idpb;
  maloai:string;
  vtmoi:ViTri;
  constructor(
    private PBS: PhongBanService,
    private route: ActivatedRoute,
    private location: Location,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.getTenCV();
  }

  getTenCV(){
    this.PBS.getTenChucVu().subscribe(data=>{this.chucvus=data;console.log(data)})
  }
  luuChucVu(){
    const id:string= this.route.snapshot.paramMap.get('idnv');
    this.vtmoi=new ViTri();
    this.vtmoi.idnv=this.PBS.IDNV;
    this.vtmoi.idpb=this.PBS.IDPB;
    this.vtmoi.maloai=this.maloai;
    console.log(this.vtmoi);
    this.PBS.postThayDoiViTri(this.vtmoi).subscribe();
    alert("Thay đổi thành công");
  }
  selectOption(idpb:string){
    console.log(idpb);
    this.maloai=idpb;
  }
}
