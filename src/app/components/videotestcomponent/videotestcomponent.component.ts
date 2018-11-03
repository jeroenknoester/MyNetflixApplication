import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-videotestcomponent',
  templateUrl: './videotestcomponent.component.html',
  styleUrls: ['./videotestcomponent.component.css']
})
export class VideotestcomponentComponent implements OnInit {

  constructor(private service: VideoService) { }

  // Todo: moet hier de type niet bij?
  videos;

  ngOnInit() {
    this.service.getVideos().subscribe(data => this.videos = data);
  }

}
