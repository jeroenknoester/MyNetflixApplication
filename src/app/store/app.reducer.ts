import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';

import { genreReducer } from './genre/genre.reducer';
import { videoReducer } from './videos/videos.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  genre: genreReducer,
  videos: videoReducer
};
