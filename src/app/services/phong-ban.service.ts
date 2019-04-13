import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';   
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { PhongBan } from '../modules/phongban';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Chucvu } from '../modules/chucvu';
import { TenCV } from '../modules/tenchucvu';
import { ViTri } from '../modules/vitri';

@Injectable({
  providedIn: 'root'
})
export class PhongBanService {
  private url='https://localhost:44301/api/Phongban';
  private urlVT='https://localhost:44301/api/ViTri';
  IDPB:string;
  IDNV:string;
  constructor(private http:HttpClient,private messageService:MessageService) {
    
   }
   private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
addID(nv:string,pb:string){
this.IDNV=nv;
this.IDPB=pb;
}

  // laasy tat ca p ban
  getAllPB(): Observable<PhongBan[]> {
    return this.http.get<PhongBan[]>(this.url+"/GetPhongBans")
    .pipe(
      catchError(this.handleError<PhongBan[]>('getAllPB', []))
    );
  }

  //lay phong ban bi id
  getPBByID(id: string): Observable<PhongBan> {
    const url = `${this.url+"/GetPhongBanById/"}/${id}`;
    return this.http.get<PhongBan>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<PhongBan>(`getHero id=${id}`))
    );
  }
  // update phong ban
  updatePhongBan (pb: PhongBan): Observable<any> {
    return this.http.put(this.url+"/postSuaTTPhongBan/", pb).pipe(
      tap(_ => this.log(`updated pb id=${pb.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  //them pb moi

addPhongBan (pb: PhongBan): Observable<PhongBan> {
  return this.http.post<PhongBan>(this.url+"/PostThemPhongBan/", pb).pipe(
    tap((newPB: PhongBan) => this.log(`added hero  id=${newPB.id}`))
 
  );
  
}
deletePhongBan (id: string): Observable<PhongBan> {
 
  return this.http.delete<PhongBan>(this.url+"/deletePhongban/"+id);
}

getSoLuongNV(id:string){
  return this.http.get<number>(this.url+"/GetSoNhanVien1PB/"+id);
}

  //lay acac chu vu cau nhan vien
getTenChucVu():Observable<TenCV[]>{
  return this.http.get<TenCV[]>(this.urlVT+"/GetTenChucVu");
}
getTenChucVuById(id :string):Observable<TenCV>{
  return this.http.get<TenCV>(this.urlVT+"/GetTenChucVu/"+id);
}
postThayDoiViTri(vtMoi:ViTri){
  return this.http.post(this.urlVT+"/PostThayDoiViTri/",vtMoi).pipe(
    tap((newPB: ViTri) => this.log(`update vt  id=${newPB.idpb}`)));
 
}
postThemViTri(vtMoi:ViTri):Observable<ViTri>{
  return this.http.post<ViTri>(this.urlVT+"/PostThemViTri/",vtMoi).pipe(
    tap((newPB: ViTri) => this.log(`update vt  id=${newPB.idpb}`)));
 
}
// xao nhan vien của pb
deleteXoaNvPb(vt : ViTri): Observable<ViTri>{
  return this.http.post<ViTri>(this.url+"/deleteNhanVienOfPhongban/",vt);
}




    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
