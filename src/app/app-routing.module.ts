import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';
import { ThongtinNhanVienComponent } from './thongtin-nhan-vien/thongtin-nhan-vien.component';
import { PhongBanComponent } from './phong-ban/phong-ban.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { ChitietPhongbanComponent } from './chitiet-phongban/chitiet-phongban.component';

const routes: Routes = [
{ path:'add',component: ThemNhanVienComponent},
{ path: 'nhanvien/:id', component:ThongtinNhanVienComponent},
{ path: 'room', component:PhongBanComponent},
{ path: 'nhanvien',component:NhanVienComponent },
{ path: 'room/:id', component:ChitietPhongbanComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
