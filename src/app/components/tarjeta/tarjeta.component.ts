import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent {

  @Input() items:any[] = [];
  
  constructor( private router:Router ) { }

  verArtista( item:any ){

    let artisId;

    if( item.type === 'artist' ){
      artisId = item.id;
    }else{
      artisId = item.artists;
    }

    console.log(artisId);
    
  }
}
