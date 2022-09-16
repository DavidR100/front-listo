import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Historial } from 'src/app/models/historial';
import { HistoriaService} from 'src/app/services/historial.service';

import {HistorialSiglas } from '../../interface/historial-siglas';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  title:String= 'ACRONIME';

out = "";

  public data: Historial[] = [];  

  dato:HistorialSiglas[]=[] ;


  constructor( private s: HistoriaService) { }

  ngOnInit(): void {

    this.traerHistorial();  
  }

  traerHistorial(){
    this.s.getHistorial().then(res => this.dato = res.data)
  .catch(()=> { 
    console.log("Error")
  });}

  buscar(out:any ):void{

  this.s.getSiglas(out.value).then((res:any) =>{
     

    this.data= res.data[0].lfs;

    this.traerHistorial();
      
    }).catch (()=> { 
      console.log("Error")
    });
        
    this.s.insertHistorial(out.value)

  

    
  }

  
}
