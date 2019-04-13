import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 
 import{PhongBanService} from '../services/phong-ban.service'
import { PhongBan } from '../modules/phongban';
@Component({
  selector: 'app-search-pb',
  templateUrl: './search-pb.component.html',
  styleUrls: ['./search-pb.component.css']
})
export class SearchPBComponent implements OnInit {

  phongban$:Observable<PhongBan[]>;
  private searchTerms=new Subject<string>();
  constructor( private PBS :PhongBanService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    //   this.phongban$=this.searchTerms.pipe(
    //     debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.PBS.searchHeroes(term)),
    // );
  }
  

}
