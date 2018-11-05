import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';
import * as fromGenres from '../../store/genre/genre.actions';
import * as fromVideos from '../../store/videos/videos.actions';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.css']
})

export class VideoBoxComponent implements OnInit {
  public videos$: Observable<Video[]>;
  public genre$: Observable<string>;
  
  constructor(private readonly store: Store<IAppState>) { }

  ngOnInit() {
    this.videos$ = this.store.pipe(select(s => s.videos));
    this.genre$ = this.store.pipe(select(s => s.genre));
  }

  // public onAddMessage(message: string): void {
  //   this.store.dispatch(new fromMessages.Add(message));
  // }

  // public onFilterChanged(filter: string): void {
  //   this.store.dispatch(new fromFilters.Set(filter));
  // }

  public onToggleClicked(video: Video) {
    this.store.dispatch(new fromVideos.ToggleStatus(video.id));
  }

  public onDeleteClicked(messageId: number) {
    this.store.dispatch(new fromVideos.Remove(messageId));
  }
}
