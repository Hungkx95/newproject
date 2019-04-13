import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhongBan } from '../modules/phongban';
import { PhongBanService } from '../services/phong-ban.service';
import { NhanVienServicesService } from '../services/nhan-vien-services.service';
import { Nhanvien } from '../modules/nhanvien';
import { stringify } from 'querystring';
import { TenCV } from '../modules/tenchucvu';
import { NhanvienOfPhongban } from '../modules/nhanvienofphongban';
import { ThayDoiChucVuComponent } from '../thay-doi-chuc-vu/thay-doi-chuc-vu.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ViTri } from '../modules/vitri';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chitiet-phongban',
  templateUrl: './chitiet-phongban.component.html',
  
  styleUrls: ['./chitiet-phongban.component.css'],
  providers: [ThayDoiChucVuComponent,NgbActiveModal],
  entryComponents:[ThayDoiChucVuComponent]
})
export class ChitietPhongbanComponent implements OnInit {
  @Input() pb: PhongBan;
  nhanvien :NhanvienOfPhongban[];
  SLNV:number;
  a:TenCV;
  vt:ViTri;
  allNV  : Nhanvien[];
  maNV:string;
  maloai:string;
  chucvus: TenCV[];
  result:ViTri;
  constructor(
    private route: ActivatedRoute,
    private PBS: PhongBanService,
    private location: Location,
    private NVS :NhanVienServicesService,
    private thayCV:ThayDoiChucVuComponent,
    private modalService: NgbModal
  ) { 
    this.vt=new ViTri();
  }
send(a:string,b:string){
  this.PBS.addID(a,b);
}
 
  getPhongBan():void{
    const id:string= this.route.snapshot.paramMap.get('id');
    
    this.PBS.getPBByID(id).subscribe(pb=>this.pb=pb);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.PBS.updatePhongBan(this.pb)
      .subscribe(() => this.goBack());
  }
  getSLNV(){
    const id:string= this.route.snapshot.paramMap.get('id');
    this.PBS.getSoLuongNV(id).subscribe(data=>this.SLNV=data);
  }
  getNV(){
    const id:string= this.route.snapshot.paramMap.get('id');
    this.NVS.getAllNhanVienByIdPB(id).subscribe(data=>{this.nhanvien=data;
    console.log(data);});
 
  }
  // get cv cau nha vien
  getCV(id:string){
    return this.PBS.getTenChucVuById(id).subscribe(data=>this.a=data);
  }

  // mở modal
  open(){
    const modalRef = this.modalService.open(ThayDoiChucVuComponent);
    const id:string= this.route.snapshot.paramMap.get('id');
    modalRef.componentInstance.id = id;
  }
//  xoa nhan vien cua pb
  deleteNV(idpb:string,idnv:string,maloai:string){
    this.vt.idnv=idnv;
    this.vt.idpb=idpb;
    this.vt.maloai=maloai;
      this.PBS.deleteXoaNvPb(this.vt).subscribe();
  }
  getAllNV(){
    this.NVS.getAllNhanVien().subscribe(all=>{this.allNV=all;console.log(all)});
   
  }
  selectOption(id:string){
    console.log(id);
    this.maNV=id;
  }
  selectOption2(id:string){
    console.log(id);
    this.maloai=id;
  }
  getTenCV(){
    this.PBS.getTenChucVu().subscribe(data=>{this.chucvus=data;console.log(data)})
  }
  // them nhan vien vòa  p b
  themVaoPB(idpb:string){
    this.vt.idnv=this.maNV;
    this.vt.idpb=idpb;
    this.vt.maloai=this.maloai;
    this.PBS.postThemViTri(this.vt).subscribe(p=>
      {
        this.result=p;
        if(this.result===undefined){alert("Nhân viên đã làm ở phòng ban này rồi");}
        else alert("Thêm vào phòng ban thành công");
      });

     
  }


  ngOnInit():void {
    this.getPhongBan();this.getSLNV();this.getNV();this.getAllNV();this.getTenCV();
  }
}
