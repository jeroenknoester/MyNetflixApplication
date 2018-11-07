import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';
import * as videoActions from '../../store/video/video.actions';

@Component({
  selector: 'app-videotestcomponent',
  templateUrl: './videotestcomponent.component.html',
  styleUrls: ['./videotestcomponent.component.css']
})
export class VideotestcomponentComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  // Todo: moet hier de type niet bij?
  videos;

  ngOnInit() {
    this.store.dispatch(new videoActions.GetAll());

    // this.service.getVideos().subscribe(data => this.videos = data);
  }
}
