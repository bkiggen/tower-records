import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AlbumService]
})
export class WelcomeComponent implements OnInit {

  threads;
  parsed;
  isYubTub;


  constructor(private albumService: AlbumService) { }


  ngOnInit() {
    this.threads = this.albumService.callReddit();
    this.threads.then(response => {
      this.threads = JSON.parse(response).data.children;
      console.log(this.threads);
      
    });
  }
}
