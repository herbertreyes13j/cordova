import { Component } from '@angular/core';
import {MandosService} from '../services/mandos.service';
import {Mando} from '../models/mando.model'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private mandoservice:MandosService) {}

  mandardato(dato){
    console.log(dato);
    const model= new Mando();
    model.estado=dato;
    console.log(model);
    this.mandoservice.insertarmando(model).then((data) => {
      console.log(data);
  })
  .catch((error) => {
      console.log(error);
  });
  }

}
