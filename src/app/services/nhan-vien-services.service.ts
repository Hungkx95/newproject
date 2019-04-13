import { Injectable } from '@angular/core';
import { Nhanvien }from '../modules/nhanvien';
import { MessageService } from './message.service';

import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Chucvu } from '../modules/chucvu';
import { NhanvienOfPhongban } from '../modules/nhanvienofphongban';
@Injectable({
  providedIn: 'root'
})
export class NhanVienServicesService {
  private url='https://localhost:44301/api/NhanVien';         
  

  constructor(private http:HttpClient,private messageService:MessageService) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getAllNhanVien():Observable<Nhanvien[]>{
    return this.http.get<Nhanvien[]>(this.url+'/getAllNhanVien');
  }
  getAllNhanVienByIdPB(id: string):Observable<NhanvienOfPhongban[]>{
    return this.http.get<NhanvienOfPhongban[]>(this.url+'/GetNhanVienByIdPB/'+id);
  }

  getNhanVienById(id : string):Observable<Nhanvien>{
    //return this.http.get<Nhanvien[]>(this.url+'/getNhanVienById/'+id);
    return this.http.get<Nhanvien>(this.url+"/getNhanVienById/"+id).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Nhanvien>(`getHero id=${id}`))
    );
  }
  

  addNhanVien(nv: Nhanvien): Observable<Nhanvien> {
    return this.http.post(this.url+"/postThemNV/", nv).pipe(
      tap((newNV: Nhanvien) => this.log(`added hero  id=${newNV.id}`))
   
    );
    
  }
  deleteNhanVien (id: string): Observable<Nhanvien> {
 
    return this.http.delete<Nhanvien>(this.url+"/deleteNhanVien/"+id);
  }
  updateNhanVien(pb: Nhanvien): Observable<Nhanvien> {
    return this.http.post(this.url+"/postSuaNV/", pb).pipe(
      tap(_ => this.log(`updated pb id=${pb.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }
  getChucVu(id :string): Observable<Chucvu[]>{
    return this.http.get<Chucvu[]>(this.url+"/getChucVuById/"+id);
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
