import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

artistas: any [] =[]
  buscarArtista(termino: string){

  //  Lo siguiente seria para guardar el valor en mayusculas
  //  termino = termino.toUpperCase();
  //  console.log(termino);

  this.spotifyService.getArtist(termino).subscribe(
    (data: any) => {

      this.artistas = data.artists.items;
      console.log(data.artists.items);
    }
  )

  }


}
