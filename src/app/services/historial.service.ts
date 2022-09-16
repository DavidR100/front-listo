import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import axios  from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  dbS = "http://www.nactem.ac.uk/software/acromine/dictionary.py";

  servidor='http://localhost:3000/api/acronime';

  constructor( private s: HttpClient) { }

  getSiglas(data:string){

    return axios.get(`${this.dbS}?sf=${data}`);

   }

   /////Connetion BACK/////
   getHistorial(){

   return axios.get(`${this.servidor}/getAcronime`)

   }

   insertHistorial(data:string){
    return axios.post(`${this.servidor}/createAcronime`, {sigla:data})

   }
}
