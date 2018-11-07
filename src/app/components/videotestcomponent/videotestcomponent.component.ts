import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';
import * as videoActions from '../../store/video/video.actions';
import { Video } from 'src/app/shared/video.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videotestcomponent',
  templateUrl: './videotestcomponent.component.html',
  styleUrls: ['./videotestcomponent.component.css']
})
export class VideotestcomponentComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new videoActions.GetAll());
    this.videos = this.store.pipe(select(s => s.videos));

    // this.service.getVideos().subscribe(data => this.videos = data);
  }
}
