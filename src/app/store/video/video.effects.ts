import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as videoActions from './video.actions';
import { Action } from '@ngrx/store';
import { VideoActionTypes } from './video.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { VideoService } from 'src/app/services/video/video.service';

@Injectable()
export class VideoEffects {

    constructor(
        private readonly videoService: VideoService,
        private readonly actions$: Actions) { }

    @Effect()
    load$: Observable<videoActions.GetAllSuccess | videoActions.GetAllError> = this.actions$.pipe(
        ofType(VideoActionTypes.GETALL),
        mergeMap(action =>
            this.videoService.getVideos().pipe(
                // If successful, dispatch success action with result
                map((videos) => new videoActions.GetAllSuccess(videos)),
                // If request fails, dispatch failed action
                catchError(() => of(new videoActions.GetAllError()))
            )
        )
    );
}
