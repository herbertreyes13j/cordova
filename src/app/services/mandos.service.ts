import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Mando} from '../models/mando.model';
import { HTTP } from '@ionic-native/http/ngx';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class MandosService {
  url='http://192.168.0.8:8080/';
  constructor(private http: HTTP) { }
  insertarmando(mando:Mando){
    let headers = {
     
  };
    return this.http.post(this.url+'Estado',mando,headers)
    
  }
}
