import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Output() videoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  receiveVideo($event) {
    this.videoEvent.emit($event);
  }

}
