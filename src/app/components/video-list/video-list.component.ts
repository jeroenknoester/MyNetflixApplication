import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Video } from '../../shared/models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styles: []
})
export class VideoListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @Input()
  public genre: string;

  @Input()
  public videos: Video[];

  @Output()
  public messageClicked = new EventEmitter<number>();

  @Output()
  public toggleClicked = new EventEmitter<Video>();

  @Output()
  public deleteClicked = new EventEmitter<number>();

  public get filteredVideos(): Video[] {
    if (!this.genre || this.genre === 'adventure') {
      return this.videos;
    }
    return this.videos.filter(m => m.status === this.genre);
  }

  public onMessageClick(messageId: number): void {
    this.messageClicked.emit(messageId);
  }

  public onToggleButtonClick(video: Video): void {
    this.toggleClicked.emit(video);
  }

  public onDeleteClick(messageId: number): void {
    this.deleteClicked.emit(messageId);
  }
}
