import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';
import { ThongtinNhanVienComponent } from './thongtin-nhan-vien/thongtin-nhan-vien.component';
import { PhongBanComponent } from './phong-ban/phong-ban.component';
import { ChitietPhongbanComponent } from './chitiet-phongban/chitiet-phongban.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchPBComponent } from './search-pb/search-pb.component';
import { ThayDoiChucVuComponent } from './thay-doi-chuc-vu/thay-doi-chuc-vu.component';


@NgModule({
  declarations: [
    AppComponent,
    NhanVienComponent,
    ThemNhanVienComponent,
    ThongtinNhanVienComponent,
    PhongBanComponent,
    ChitietPhongbanComponent,
    MessagesComponent,
    SearchPBComponent,
    ThayDoiChucVuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[ThayDoiChucVuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
