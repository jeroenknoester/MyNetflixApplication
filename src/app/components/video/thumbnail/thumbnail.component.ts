import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VideoService } from '../../../services/video/video.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Output() videoEvent = new EventEmitter<string>();

  videos;
  genres;

  constructor(
    private videoService: VideoService,
  ) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(data => this.videos = data);
  }

  videoStart(url) {
    this.videoEvent.emit(url);
  }

}
